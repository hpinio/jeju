const moment = require('moment');
const global = require('./global');

// MAPPER ALLOCATION
const allocation_dto_from_db = (dbDoc) => {
  let allocation = {
    _id: '',
    title: '',
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

  allocation.title = dbDoc.title;
  allocation.target_balance = dbDoc.target_balance;
  allocation.balance = dbDoc.balance;
  allocation.start_date = moment(dbDoc.start_date).format(global.DATE_FORMAT);
  allocation.due_date = moment(dbDoc.due_date).format(global.DATE_FORMAT);
  allocation._id = dbDoc._id;

  return allocation;
};

const allocation_db_from_dto = (json) => {
  let allocation = {
    _id: '',
    title: '',
    type: 0,
    category: 0,
    target_balance: 0,
    balance: 0,
    start_date: moment().format(),
    due_date: moment().format()
  };
  allocation.title = json.title;
  allocation.type = json.type.id;
  allocation.category = json.category.id;
  allocation.target_balance = json.target_balance;
  allocation.balance = json.balance;
  allocation.start_date = moment(json.start_date, global.DATE_FORMAT).format();
  allocation.due_date = moment(json.due_date, global.DATE_FORMAT).format();
  if (json.hasOwnProperty('_id')) {
    allocation._id = json._id;
  }
  return allocation;
};

const allocation_db = () => {
  let allocation = {
    _id: '',
    title: '',
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
      let m_allocation = allocation_dto_from_db(allocation);
      account.allocations.push(m_allocation);
    }
  }
  account._id = dbDoc._id;
  return account;
};

const account_db_from_dto = (json) => {
  let account = {
    card_no: 0,
    cash_tag: '',
    allocations: [],
    balance: 0,
  };
  account.card_no = json.card_no;
  account.cash_tag = json.cash_tag;
  account.balance = json.balance;
  if (json.allocations && json.allocations.length) {
    for (let index = 0; index < json.allocations.length; index++) {
      let allocation = json.allocations[index];
      let d_allocation = allocation_db_from_dto(allocation);
      account.allocations.push(d_allocation);
    }
  }
  if (json.hasOwnProperty('_id')) {
    account._id = json._id;
  }
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


const allocation_history_db = () => {
  let history = {
    account_id: '',
    allocation_id: '',
    allocation_category: 0,
    amount: 0,
    transaction_date: moment().format(),
  };
  return history;
};


module.exports = {
  allocation_db: allocation_db,
  allocation_db_from_dto: allocation_db_from_dto,
  allocation_dto_from_db: allocation_dto_from_db,
  account_db: account_db,
  account_db_from_dto: account_db_from_dto,
  account_dto_from_db: account_dto_from_db,
  allocation_history_db: allocation_history_db,
};