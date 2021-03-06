const moment = require('moment');
const global = require('./global');
const accountsService = require('./accounts.service');
const mapper = require('./transactions.mapper');


const s = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(true);
    }, 100);
  });
};

const transfer = (sourceCashTag, destinationCashTag, amount) => {
  return new Promise((resolve, reject) => {
    let valid = true;
    valid = valid && sourceCashTag;
    valid = valid && destinationCashTag;
    valid = valid && amount;
    if (!valid) {
      reject({
        code: 400,
        message: 'Invalid input',
        error: 'INVALID'
      });
    } else {
      accountsService.getByCashTag(sourceCashTag)
        .then(sourceAccount => {
          // reduce balance from source account
          sourceAccount.balance = sourceAccount.balance - amount;
          // update the source account
          return accountsService.update(sourceAccount);
        }, err => {
          return s();
        })
        .then(sourceAccount => {
          return accountsService.getByCashTag(destinationCashTag);
        })
        .then(destinationAccount => {
          // add balance to destination Account
          destinationAccount.balance = destinationAccount.balance + amount;
          // update the destination Account
          return accountsService.update(destinationAccount);
        }, err => {
          return s();
        })
        .then(destinationAccount => {
          // create transaction history
          let d_transaction = mapper.transaction_db();
          d_transaction.source_cash_tag = sourceCashTag;
          d_transaction.destination_cash_tag = destinationCashTag;
          d_transaction.amount = amount;

          return global.dbfn.insert(global.db_transactions, d_transaction);
        })
        .then(newTransaction => {
          let m_transaction = mapper.transaction_dto_from_db(newTransaction, sourceCashTag);
          resolve(m_transaction);
        })
        .catch(err => {
          reject(err);
        });
    }
  });
};


const get = (filters) => {
  return new Promise((resolve, reject) => {
    let valid = true;
    valid = valid && filters.cash_tag;
    valid = valid && moment(filters.from, 'DD/MM/YYYY').isValid();
    valid = valid && moment(filters.to, 'DD/MM/YYYY').isValid();
    if (!valid) {
      reject({
        code: 400,
        message: 'Invalid input',
        error: 'INVALID'
      });
    } else {
      let query = {
        cash_tag: filters.cash_tag,
        from: moment(filters.from, 'DD/MM/YYYY').format(),
        to: moment(filters.to, 'DD/MM/YYYY').format(),
      };
      global.dbfn.find(global.db_transactions, {
          $or: [{
            source_cash_tag: query.cash_tag
          }, {
            destination_cash_tag: query.cash_tag
          }],
          transaction_date: {
            $gte: query.from,
            $lte: query.to
          }
        })
        .then(data => {
          let mapped = [];
          data.forEach(d => {
            let m_d = mapper.transaction_dto_from_db(d, filters.cash_tag);
            mapped.push(m_d);
          });
          resolve(mapped);
        })
        .catch(err => {
          reject(err);
        });
    }
  });
};


module.exports = {
  transfer: transfer,
  get: get
};