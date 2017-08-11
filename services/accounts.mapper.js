const moment = require('moment');
const global = require('./global');

// MAPPER ALLOCATION
const allocation_dto_from_db = (dbDoc) => {
  let allocation = {
    type: null,
    category: null,
    target_balance: 0,
    balance: 0,
    start_date: moment().format(global.DATE_FORMAT),
    due_date: moment().format(global.DATE_FORMAT)
  };

  let type = global.fn.findAllocationTypeById(dbDoc.type);
  allocation.type = type;

  let category = global.fn.findAllocationCategoryById(dbDoc.category);
  allocation.category = category;

  allocation.target_balance = dbDoc.target_balance;
  allocation.balance = dbDoc.balance;
  allocation.start_date = moment(dbDoc.start_date).format(global.DATE_FORMAT);
  allocation.due_date = moment(dbDoc.due_date).format(global.DATE_FORMAT);

  return allocation;
};

const allocation_db = () => {
  let allocation = {
    type: 0,
    category: 0,
    target_balance: 0,
    balance: 0,
    start_date: moment().format(),
    due_date: moment().format()
  };
  return allocation;
};


// MAPPER ACCOUNT
const account_dto_from_db = (dbDoc) => {
  let account = {
    card_no: 0,
    cash_tag: '',
    allocations: [],
    balance: 0,
  };
  account.card_no = dbDoc.card_no;
  account.cash_tag = dbDoc.cash_tag;
  account.balance = dbDoc.balance;
  // map allocations
  if (dbDoc.allocations && dbDoc.allocations.length) {
    for (let index = 0; index < dbDoc.allocations.length; index++) {
      let allocation = dbDoc.allocations[index];
      let m_allocation = allocation_schema_from_db(allocation);
      account.allocations.push(m_allocation);
    }
  }
  account._id = dbDoc._id;
  return account;
};

const account_db = () => {
  let account = {
    card_no: 0,
    cash_tag: '',
    allocations: [],
    balance: 0,
  };
  return account;
};

module.exports = {
  allocation_db: allocation_db,
  allocation_dto_from_db: allocation_dto_from_db,
  account_db: account_db,
  account_dto_from_db: account_dto_from_db,
};