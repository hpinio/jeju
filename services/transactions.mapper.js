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

const transaction_dto_from_db = (dbDoc) => {
  let transaction = {
    source_cash_tag: '',
    destination_cash_tag: '',
    amount: 0,
    transaction_date: moment().format(),
  };
  transaction.source_cash_tag = dbDoc.source_cash_tag;
  transaction.destination_cash_tag = dbDoc.source_cash_tag;
  transaction.amount = dbDoc.amount;
  transaction.transaction_date = moment(dbDoc.transaction_date).format(global.DATE_FORMAT);
  return transaction;
};

module.exports = {
  transaction_db: transaction_db,
  transaction_dto_from_db: transaction_dto_from_db,
};