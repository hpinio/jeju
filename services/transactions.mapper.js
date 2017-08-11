const moment = require('moment');


const transaction_db = () => {
  let transaction = {
    source_cash_tag: '',
    destination_cash_tag: '',
    amount: 0,
    transaction_date: moment().format(),
  };
  return transaction;
};

module.exports = {
  transaction_db: transaction_db
};