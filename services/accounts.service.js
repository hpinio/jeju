const neDB = require('nedb');
const path = require('path');
const moment = require('moment');
const global = require('./global');
const mapper = require('./accounts.mapper');


// DB
const db = new neDB({
  filename: path.join('data', 'accounts.db'),
  autoload: true
});

const db2 = new neDB({
  filename: path.join('data', 'allocations_history.db'),
  autoload: true
});


// CREATE
const create = (card_no, cash_tag) => {
  return new Promise((resolve, reject) => {
    // validate input
    let valid = true;
    valid = valid && card_no;
    valid = valid && cash_tag;
    if (!valid) {
      reject({
        code: 400,
        message: 'Invalid input',
        error: 'INVALID'
      });
    } else {
      global.db.findOne(db, {
          card_no: card_no
        })
        .then(account => {
          if (account) {
            reject({
              code: 500,
              message: 'Account already existed',
              error: 'FOUND'
            });
          } else {
            let d_account = mapper.account_db();
            d_account.card_no = card_no;
            d_account.cash_tag = cash_tag;

            return global.db.insert(db, d_account);
          }
        })
        .then(newAccount => {
          let m_account = mapper.account_dto_from_db(newAccount);
          resolve(m_account);
        })
        .catch(err => {
          reject(err);
        });
    }
  });
};


const update = (accountJson) => {
  return new Promise((resolve, reject) => {
    let valid = true;
    valid = valid && accountJson.balance;
    if (!valid) {
      reject({
        code: 400,
        message: 'Invalid input',
        error: 'INVALID'
      });
    } else {
      global.db.findOne(db, {
          _id: accountJson._id
        })
        .then(account => {
          if (account) {
            let u_account = mapper.account_db_from_dto(accountJson);
            // for now, lets just update the balance
            account.balance = u_account.balance;

            return global.db.update(db, {
              _id: account._id
            }, account);

          } else {
            reject({
              code: 404,
              message: 'Not an account',
              error: 'NOT FOUND'
            });
          }
        })
        .then(updatedAccount => {
          let m_account = mapper.account_dto_from_db(updatedAccount);
          resolve(m_account);
        })
        .catch(err => {
          reject(err);
        });
    }
  });
};


// GET BY CARDNO
const getByCardNo = (cardNo) => {
  return new Promise((resolve, reject) => {
    global.db.findOne(db, {
        card_no: cardNo
      })
      .then(account => {
        if (account) {
          let m_account = mapper.account_dto_from_db(account);
          resolve(m_account);
        } else {
          reject({
            code: 404,
            message: 'Not an account',
            error: 'NOT FOUND'
          });
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

// GET BY CASH TAG
const getByCashTag = (cashTag) => {
  return new Promise((resolve, reject) => {
    global.db.findOne(db, {
        cash_tag: cashTag
      })
      .then(account => {
        if (account) {
          let m_account = mapper.account_dto_from_db(account);
          resolve(m_account);
        } else {
          reject({
            code: 404,
            message: 'Not an account',
            error: 'NOT FOUND'
          });
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

// GET BY ID
const getById = (id) => {
  return new Promise((resolve, reject) => {
    global.db.findOne(db, {
        _id: id
      })
      .then(account => {
        if (account) {
          let m_account = mapper.account_dto_from_db(account);
          resolve(m_account);
        } else {
          reject({
            code: 404,
            message: 'Not an account',
            error: 'NOT FOUND'
          });
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};


// CREATE ALLOCATION
const addAllocation = (id, allocationJson) => {
  return new Promise((resolve, reject) => {
    let valid = true;
    allocationJson.category = parseInt(allocationJson.category, 10);
    allocationJson.initial_balance = parseInt(allocationJson.initial_balance, 10);
    allocationJson.target_balance = parseInt(allocationJson.target_balance, 10);
    valid = valid && allocationJson.title && allocationJson.title.length;
    valid = valid && allocationJson.category;
    valid = valid && allocationJson.initial_balance;
    valid = valid && allocationJson.target_balance;
    valid = valid && moment(allocationJson.due_date, global.DATE_FORMAT).isValid();
    if (!valid) {
      reject({
        code: 400,
        message: 'Invalid input',
        error: 'INVALID'
      });
    } else {
      global.db.findOne(db, {
          _id: id
        })
        .then(account => {
          if (!account) {
            reject({
              code: 404,
              message: 'Not an account',
              error: 'NOT FOUND'
            });
          } else {
            // create allocation db model
            let d_allocation = mapper.allocation_db();
            let category = global.fn.findAllocationCategoryById(allocationJson.category);
            d_allocation.title = allocationJson.title;
            d_allocation.category = category.id;
            d_allocation.type = category.type;
            d_allocation.balance = allocationJson.initial_balance;
            d_allocation.target_balance = allocationJson.target_balance;
            d_allocation.due_date = moment(allocationJson.due_date, global.DATE_FORMAT).format();
            d_allocation._id = global.fn.uuidv4();

            // make a copy of existing account, push new allocation to db
            let u_account = Object.assign({}, account);
            u_account.allocations.push(d_allocation);

            // update account with added allocation
            return global.db.update(db, {
              _id: account._id
            }, u_account);
          }
        })
        .then(updatedAccount => {
          let m_account = mapper.account_dto_from_db(updatedAccount);
          resolve(m_account);
        })
        .catch(err => {
          reject(err);
        });
    }
  });
};


// UPDATE ALLOCATION
const updateAllocation = (id, allocationJson) => {
  return new Promise((resolve, reject) => {
    let valid = true;
    allocationJson.category = parseInt(allocationJson.category, 10);
    allocationJson.target_balance = parseInt(allocationJson.target_balance, 10);
    valid = valid && allocationJson.title && allocationJson.title.length;
    valid = valid && allocationJson.category;
    valid = valid && allocationJson.target_balance;
    valid = valid && moment(allocationJson.due_date, global.DATE_FORMAT).isValid();
    if (!valid) {
      reject({
        code: 400,
        message: 'Invalid input',
        error: 'INVALID'
      });
    } else {
      global.db.findOne(db, {
          _id: id
        })
        .then(account => {
          if (!account) {
            reject({
              code: 404,
              message: 'Not an account',
              error: 'NOT FOUND'
            });
          } else {
            // find allocation, if not found, throw error
            let existing = global.fn.findAccountAllocationById(account, allocationJson._id)
            if (!existing) {
              reject({
                code: 500,
                message: 'Allocation not found',
                error: 'NOT FOUND'
              });
            } else {
              // update existing allocation
              account.allocations.forEach((allocation) => {
                if (allocation._id === existing._id) {
                  allocation.title = allocationJson.title;
                  allocation.target_balance = allocationJson.target_balance;
                  allocation.due_date = moment(allocationJson.due_date, global.DATE_FORMAT).format();
                }
              });

              // update account with updated allocation
              return global.db.update(db, {
                _id: account._id
              }, account);
            }
          }
        })
        .then(updatedAccount => {
          let m_account = mapper.account_dto_from_db(updatedAccount);
          resolve(m_account);
        })
        .catch(err => {
          reject(err);
        });
    }
  });
};


// DELETE ALLOCATION
const deleteAllocation = (id, allocationJson) => {
  return new Promise((resolve, reject) => {
    let valid = true;
    valid = valid && allocationJson._id;
    if (!valid) {
      reject({
        code: 400,
        message: 'Invalid input',
        error: 'INVALID'
      });
    } else {
      global.db.findOne(db, {
          _id: id
        })
        .then(account => {
          if (account) {
            let idx = global.fn.findIndexOfAccountAllocationById(account, allocationJson._id);
            if (idx > -1) {
              account.allocations.splice(idx, 1);
              // update DB
              return global.db.update(db, {
                _id: id
              }, account);
            } else {
              reject({
                code: 404,
                message: 'No allocation',
                error: 'NOT FOUND'
              });
            }
          } else {
            reject({
              code: 404,
              message: 'Not an account',
              error: 'NOT FOUND'
            });
          }
        })
        .then(updatedAccount => {
          let m_account = mapper.account_dto_from_db(updatedAccount);
          resolve(m_account);
        })
        .catch(err => {
          reject(err);
        });
    }
  });
};


// ALLOCATE
const allocate = (id, allocationJson) => {
  return new Promise((resolve, reject) => {
    let valid = true;
    valid = valid && allocationJson;
    valid = valid && allocationJson.amount;
    valid = valid && allocationJson._id;
    if (!valid) {
      reject({
        code: 400,
        message: 'Invalid input',
        error: 'INVALID'
      });
    } else {
      let u_account = null;
      let f_allocation = null;

      global.db.findOne(db, {
          _id: id
        })
        .then(account => {
          if (account) {
            // check balance
            if (account.balance < allocationJson.amount) {
              reject({
                code: 500,
                message: 'Balance is not enough',
                error: 'INVALID'
              });
            } else {
              // update account
              account.balance = account.balance - allocationJson.amount;

              let found = null;
              account.allocations.forEach(allocation => {
                if (allocation._id === allocationJson._id) {
                  found = allocation;
                  f_allocation = found;
                  allocation.balance = allocation.balance + allocationJson.amount;
                }
              });

              if (found) {
                // update DB
                return global.db.update(db, {
                  _id: id
                }, account);
              } else {
                reject({
                  code: 404,
                  message: 'No allocation',
                  error: 'NOT FOUND'
                });
              }
            }
          } else {
            reject({
              code: 404,
              message: 'Not an account',
              error: 'NOT FOUND'
            });
          }
        })
        .then(updatedAccount => {
          u_account = updatedAccount;

          let history = mapper.allocation_history_db();
          // account_id: '',
          // allocation_id: '',
          // allocation_category: 0,
          // amount: 0,
          // transaction_date: moment().format(),
          history.account_id = updatedAccount._id;
          history.allocation_id = allocationJson._id;
          history.allocation_category = f_allocation.category;
          history.amount = allocationJson.amount;

          return global.db.insert(db2, history);
        })
        .then(history => {
          let m_account = mapper.account_dto_from_db(u_account);
          resolve(m_account);
        })
        .catch(err => {
          reject(err);
        });
    }
  });
};


// EXPOSE PUBLIC
const Service = {
  getById: getById,
  getByCardNo: getByCardNo,
  getByCashTag: getByCashTag,
  addAllocation: addAllocation,
  updateAllocation: updateAllocation,
  deleteAllocation: deleteAllocation,
  allocate: allocate,
  create: create,
  update: update,
};

module.exports = Service;