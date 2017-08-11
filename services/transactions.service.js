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
        resolve(newTransaction);
      })
      .catch(err => {
        reject(err);
      });
  });
};


module.exports = {
  transfer: transfer
};