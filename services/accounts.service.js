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
  });
};


const update = (accountJson) => {
  return new Promise((resolve, reject) => {
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


const ensureAndValidate = (allocationJson) => {
  // ensure
  allocationJson.category = parseInt(allocationJson.category, 10);
  allocationJson.target_balance = parseInt(allocationJson.target_balance, 10);

  // make sure the balance is 0 cause we are just creating new allocation
  let valid = true;
  valid = valid && allocationJson.category;
  valid = valid && allocationJson.target_balance;
  valid = valid && moment(allocationJson.due_date, global.DATE_FORMAT).isValid();

  return valid;
};


// CREATE ALLOCATION
const addAllocation = (id, allocationJson) => {
  return new Promise((resolve, reject) => {
    let valid = ensureAndValidate(allocationJson);
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
            // find allocation, if found, throw error
            let existing = global.fn.findAccountAllocationCategoryById(account, allocationJson.category)
            if (existing) {
              reject({
                code: 200,
                message: 'Operation OK, but allocation not created. Reason: allocation is already created.',
                error: 'FOUND'
              });
            } else {
              // create allocation db model
              let d_allocation = mapper.allocation_db();
              let category = global.fn.findAllocationCategoryById(allocationJson.category);
              d_allocation.category = category.id;
              d_allocation.type = category.type;
              d_allocation.target_balance = allocationJson.target_balance;
              d_allocation.due_date = moment(allocationJson.due_date, global.DATE_FORMAT).format();

              // make a copy of existing account, push new allocation to db
              let u_account = Object.assign({}, account);
              u_account.allocations.push(d_allocation);

              // update account with added allocation
              return global.db.update(db, {
                _id: account._id
              }, u_account);
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


// UPDATE ALLOCATION
const updateAllocation = (id, allocationJson) => {
  return new Promise((resolve, reject) => {
    let valid = ensureAndValidate(allocationJson);
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
            let existing = global.fn.findAccountAllocationCategoryById(account, allocationJson.category)
            if (!existing) {
              reject({
                code: 500,
                message: 'Allocation not found',
                error: 'NOT FOUND'
              });
            } else {
              // update existing allocation
              account.allocations.forEach((allocation) => {
                if (allocation.category === existing.category) {
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
    allocationJson.category = parseInt(allocationJson.category, 10);

    global.db.findOne(db, {
        _id: id
      })
      .then(account => {
        if (account) {
          let idx = global.fn.findIndexOfAccountAllocationCategoryById(account, allocationJson.category);
          console.log(idx);
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
  });
};


// ALLOCATE
const allocate = (id, allocationJson) => {
  return new Promise((resolve, reject) => {
    allocationJson.category = parseInt(allocationJson.category, 10);

    let u_account = null;

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
              if (allocation.category === allocationJson.category) {
                found = allocation;
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
        history.category = allocationJson.category;
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