const neDB = require('nedb');
const path = require('path');
const moment = require('moment');
const crypto = require('crypto');
const accountsMapper = require('./accounts.mapper');
const accountsService = require('./accounts.service');


// DB
const db = new neDB({
  filename: path.join('data', 'registrations.db'),
  autoload: true
});


const schema = (json) => {
  let registration = {
    card_no: 0,
    current_otp: 0,
    otp_confirmed: false,
    created_at: moment().format(),
    pin: 0,
    cash_tag: '',
    approved: false,
    registration_token: ''
  };
  if (json) {
    registration.card_no = json.card_no;
    registration.current_otp = json.current_otp;
    registration.otp_confirmed = json.otp_confirmed;
    registration.created_at = json.created_at;
    registration.pin = json.pin;
    registration.cash_tag = json.cash_tag;
    registration.approved = json.approved;
    registration.registration_token = json.registration_token;
    if (json._id) {
      registration._id = json._id;
    }
  }
  return registration;
};


const create = (cardNo) => {
  return new Promise((resolve, reject) => {
    let registration = schema(null);
    registration.card_no = cardNo;

    // find existing card
    db.find({
      card_no: cardNo
    }, (err, doc) => {
      // card found
      if (!err && doc && doc.length) {
        reject({
          code: 500,
          message: 'Card number has been registered.',
          error: err
        });
      } else if (!err && !(doc && doc.length)) { // card not found
        // create registration_token
        crypto.randomBytes(48, function (err, buffer) {
          if (err) {
            reject({
              code: 500,
              message: 'Cannot insert data. Something is wrong in the server.',
              error: err
            });
          } else {
            const token = buffer.toString('hex');
            registration.registration_token = token;

            // create OTP 
            const otp = Math.floor(1000 + Math.random() * 9000);
            registration.current_otp = otp;

            // insert new registration
            db.insert(registration, (err, newRegistration) => {
              if (err) {
                reject({
                  code: 500,
                  message: 'Cannot insert data. Something is wrong in the server.',
                  error: err
                });
              } else {
                resolve({
                  key: newRegistration._id,
                  token: newRegistration.registration_token
                });
              }
            });
          }
        });
      } else { // something else
        reject({
          code: 500,
          message: 'Cannot insert data. Something is wrong in the server.',
          error: null
        });
      }
    });
  });
};


const confirmOTP = (params) => {
  return new Promise((resolve, reject) => {
    db.findOne({
      _id: params._id,
      registration_token: params.registration_token
    }, (err, doc) => {
      if (err) {
        reject({
          code: 500,
          message: 'Something is wrong in the server.',
          error: err
        });
      } else {
        if (doc) {
          // check if otp match, if not return error
          if (doc.current_otp === params.current_otp) {
            let u_doc = Object.assign({}, doc);
            u_doc.otp_confirmed = true;

            db.update(doc, u_doc, {}, (err, numberOfUpdated) => {
              if (err) {
                reject({
                  code: 500,
                  message: 'Cannot update data. Something is wrong in the server.',
                  error: err
                });
              } else {
                resolve({
                  key: u_doc._id,
                  token: u_doc.registration_token,
                  otp_confirmed: true
                });
              }
            });
          } else {
            reject({
              code: 500,
              message: 'Invalid OTP.',
              error: null
            });
          }
        } else {
          reject({
            code: 404,
            message: 'Invalid registration.',
            error: null
          });
        }
      }
    });
  });
};


const setPIN = (params) => {
  return new Promise((resolve, reject) => {
    db.findOne({
      _id: params._id,
      registration_token: params.registration_token
    }, (err, doc) => {
      if (err) {
        reject({
          code: 500,
          message: 'Something is wrong in the server.',
          error: err
        });
      } else {
        if (doc) {
          let u_doc = Object.assign({}, doc);
          u_doc.pin = params.pin

          db.update(doc, u_doc, {}, (err, numberOfUpdated) => {
            if (err) {
              reject({
                code: 500,
                message: 'Cannot update data. Something is wrong in the server.',
                error: err
              });
            } else {
              resolve({
                key: u_doc._id,
                token: u_doc.registration_token,
                pin_set: true
              });
            }
          });
        } else {
          reject({
            code: 404,
            message: 'Invalid registration.',
            error: null
          });
        }
      }
    });
  });
};


const setCashTag = (params) => {
  return new Promise((resolve, reject) => {
    db.findOne({
      _id: params._id,
      registration_token: params.registration_token
    }, (err, doc) => {
      if (err) {
        reject({
          code: 500,
          message: 'Something is wrong in the server.',
          error: err
        });
      } else {
        if (doc) {
          let u_doc = Object.assign({}, doc);
          u_doc.cash_tag = params.cash_tag

          db.update(doc, u_doc, {}, (err, numberOfUpdated) => {
            if (err) {
              reject({
                code: 500,
                message: 'Cannot update data. Something is wrong in the server.',
                error: err
              });
            } else {
              resolve({
                key: u_doc._id,
                token: u_doc.registration_token,
                cash_tag_set: true
              });
            }
          });
        } else {
          reject({
            code: 404,
            message: 'Invalid registration.',
            error: null
          });
        }
      }
    });
  });
};


const approve = (params) => {
  return new Promise((resolve, reject) => {
    db.findOne({
      _id: params._id,
      registration_token: params.registration_token
    }, (err, doc) => {
      if (err) {
        reject({
          code: 500,
          message: 'Something is wrong in the server.',
          error: err
        });
      } else {
        if (doc) {
          // should validate the registration first
          let valid = true;
          valid = valid && doc.card_no && doc.card_no > 0;
          valid = valid && doc.current_otp && doc.otp_confirmed;
          valid = valid && doc.pin && doc.pin > 0;
          valid = valid && doc.cash_tag && doc.cash_tag.length > 0;

          if (!valid) {
            reject({
              code: 500,
              message: 'Cannot approve registration. Registration is invalid.',
              error: null
            });
          } else {
            let u_doc = Object.assign({}, doc);
            u_doc.approved = true;

            db.update(doc, u_doc, {}, (err, numberOfUpdated) => {
              if (err) {
                reject({
                  code: 500,
                  message: 'Cannot update data. Something is wrong in the server.',
                  error: err
                });
              } else {
                // registration approved, creating an account from the registration
                accountsService.create(u_doc.card_no, u_doc.cash_tag)
                  .then((newAccount) => {
                    resolve({
                      key: u_doc._id,
                      token: u_doc.registration_token,
                      approved: true,
                      account: newAccount
                    });
                  }, (err) => {
                    if (err.message) {
                      reject(err);
                    } else {
                      reject({
                        code: 500,
                        message: 'Cannot proceed. Something is wrong in the server.',
                        error: err
                      });
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                    reject({
                      code: 500,
                      message: 'Cannot proceed. Something is wrong in the server.',
                      error: error
                    });
                  });
              }
            });
          }
        } else {
          reject({
            code: 404,
            message: 'Invalid registration.',
            error: null
          });
        }
      }
    });
  });
};


// EXPOSE PUBLIC
const Service = {
  create: create,
  confirmOTP: confirmOTP,
  setPIN: setPIN,
  setCashTag: setCashTag,
  approve: approve
};

module.exports = Service;