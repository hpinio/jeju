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


// CREATE
const create = (card_no, cash_tag) => {
  return new Promise((resolve, reject) => {
    db
      .findOne({
        card_no: card_no
      })
      .exec((err, doc) => {
        if (err) {
          reject(err);
        } else {
          if (doc) {
            reject({
              code: 500,
              message: 'Account already existed',
              error: 'FOUND'
            });
          } else {
            let d_account = mapper.account_db();
            d_account.card_no = card_no;
            d_account.cash_tag = cash_tag;
            db.insert(d_account, (err, newAccount) => {
              if (err) {
                reject({
                  code: 500,
                  message: 'Cannot insert data. Something is wrong in the server.',
                  error: err
                });
              } else {
                let m_account = mapper.account_dto_from_db(d_account);
                resolve(m_account);
              }
            });
          }
        }
      });
  });
};


// GET BY ID
const getById = (id) => {
  return new Promise((resolve, reject) => {
    db
      .findOne({
        _id: id
      })
      .exec((err, doc) => {
        if (err) {
          reject(err);
        } else {
          if (doc) {
            // create the model from DB for further processng. 
            // WHY? to make sure model has correct properties mapped from DB
            let m_doc = mapper.account_dto_from_db(doc);
            resolve(m_doc);
          } else {
            reject({
              code: 404,
              message: 'Invalid account.',
              error: null
            });
          }
        }
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
    if (valid) {
      // find account
      db
        .findOne({
          _id: id
        })
        .exec((err, doc) => {
          if (err) {
            reject(err);
          } else {
            if (doc) {
              // find allocation, if found, throw error
              let existing = global.fn.findAccountAllocationCategoryById(doc, allocationJson.category)
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
                let u_doc = Object.assign({}, doc);
                u_doc.allocations.push(d_allocation);

                // update account with added allocation
                db.update({
                  _id: doc._id
                }, u_doc, {}, (err, numberOfUpdated) => {
                  if (err) {
                    reject({
                      code: 500,
                      message: 'Cannot update data. Something is wrong in the server.',
                      error: err
                    });
                  } else {
                    let m_doc = mapper.account_dto_from_db(u_doc);
                    resolve(m_doc);
                  }
                });
              }
            } else {
              reject({
                code: 404,
                message: 'Invalid account.',
                error: null
              });
            }
          }
        });
    } else {
      reject({
        code: 400,
        message: 'Invalid Allocation.',
        error: null
      });
    }
  });
};


// UPDATE ALLOCATION
const updateAllocation = (id, allocationJson) => {
  return new Promise((resolve, reject) => {
    let valid = ensureAndValidate(allocationJson);
    if (valid) {
      // find account
      db
        .findOne({
          _id: id
        })
        .exec((err, doc) => {
          if (err) {
            reject(err);
          } else {
            if (doc) {
              // find allocation, if not found, throw error
              let existing = global.fn.findAccountAllocationCategoryById(doc, allocationJson.category)
              if (!existing) {
                reject({
                  code: 500,
                  message: 'Cannot find allocation.',
                  error: 'NOT FOUND'
                });
              } else {
                // update existing allocation
                doc.allocations.forEach((allocation) => {
                  if (allocation.category === existing.category) {
                    allocation.target_balance = allocationJson.target_balance;
                    allocation.due_date = moment(allocationJson.due_date, global.DATE_FORMAT).format();
                  }
                });
                // update account with updated allocation
                db.update({
                  _id: doc._id
                }, doc, {}, (err, numberOfUpdated) => {
                  if (err) {
                    reject({
                      code: 500,
                      message: 'Cannot update data. Something is wrong in the server.',
                      error: err
                    });
                  } else {
                    let m_doc = mapper.account_dto_from_db(doc);
                    resolve(m_doc);
                  }
                });
              }
            } else {
              reject({
                code: 404,
                message: 'Invalid account.',
                error: null
              });
            }
          }
        });
    } else {
      reject({
        code: 400,
        message: 'Invalid Allocation.',
        error: null
      });
    }
  });
};


// EXPOSE PUBLIC
const Service = {
  getById: getById,
  addAllocation: addAllocation,
  updateAllocation: updateAllocation,
  create: create,
};

module.exports = Service;