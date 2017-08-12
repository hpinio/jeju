const moment = require('moment');
const global = require('./global');


const transaction_db = () => {
  let transaction = {
    source_cash_tag: '',
    destination_cash_tag: '',
    amount: 0,
    transaction_date: moment().format(),
  };
  return transaction;
};

const transaction_dto_from_db = (dbDoc, currentCashTag) => {
  let transaction = {
    source_cash_tag: '',
    destination_cash_tag: '',
    amount: 0,
    transaction_date: moment().format(),
    raw_transaction_date: moment().format(),
    type: '',
  };
  transaction.source_cash_tag = dbDoc.source_cash_tag;
  transaction.destination_cash_tag = dbDoc.source_cash_tag;
  transaction.amount = dbDoc.amount;
  transaction.transaction_date = moment(dbDoc.transaction_date).format(global.DATE_FORMAT);
  transaction.raw_transaction_date = moment(dbDoc.transaction_date).format();

  transaction.type = dbDoc.source_cash_tag === currentCashTag ? 'OUT' : dbDoc.destination_cash_tag === currentCashTag ? 'IN' : 'UNDEFINED';

  return transaction;
};

module.exports = {
  transaction_db: transaction_db,
  transaction_dto_from_db: transaction_dto_from_db,
};