const neDB = require('nedb');
const path = require('path');
const moment = require('moment');
const global = require('./global');
const accountsService = require('./accounts.service');
const mapper = require('./transactions.mapper');


// DB
const db = new neDB({
  filename: path.join('data', 'transactions.db'),
  autoload: true
});


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
      accountsService.getByCashTag(destinationCashTag)
        .then(account => {
          // add balance to account
          account.balance = account.balance + amount;
          // update the account
          return accountsService.update(account);
        })
        .then(account => {
          // create transaction history
          let d_transaction = mapper.transaction_db();
          d_transaction.source_cash_tag = sourceCashTag;
          d_transaction.destination_cash_tag = destinationCashTag;
          d_transaction.amount = amount;

          return global.db.insert(db, d_transaction);
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
      global.db.find(db, {
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