const moment = require('moment');
const crypto = require('crypto');
const accountsMapper = require('./accounts.mapper');
const accountsService = require('./accounts.service');
const global = require('./global');



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


const createToken = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(48, function (err, buffer) {
      if (err) {
        reject({
          code: 500,
          message: 'Error Generating Token.',
          error: err
        });
      } else {
        const token = buffer.toString('hex');
        resolve(token);
      }
    });
  });
};


const create = (cardNo) => {
  return new Promise((resolve, reject) => {
    if (!cardNo || isNaN(cardNo)) {
      reject({
        code: 400,
        message: 'Invalid input',
        error: 'INVALID'
      });
    }

    let registration = schema(null);
    registration.card_no = cardNo;

    global.dbfn.findOne(global.db_registrations, {
        card_no: cardNo
      })
      .then(registration => {
        // card found
        if (registration) {
          reject({
            code: 500,
            message: 'Card number has been registered.',
            error: 'FOUND'
          });
        } else { // card not found
          return createToken();
        }
      })
      .then(token => {
        // set token
        registration.registration_token = token;

        // create OTP 
        const otp = Math.floor(1000 + Math.random() * 9000);
        registration.current_otp = otp;

        // insert
        return global.dbfn.insert(global.db_registrations, registration);
      })
      .then(newRegistration => {
        resolve({
          key: newRegistration._id,
          token: newRegistration.registration_token
        });
      })
      .catch(err => {
        reject(err);
      });
  });
};


const confirmOTP = (params) => {
  return new Promise((resolve, reject) => {
    global.dbfn.findOne(global.db_registrations, {
        _id: params._id,
        registration_token: params.registration_token
      })
      .then(registration => {
        if (registration) {
          // check if otp match, if not return error
          if (registration.current_otp === params.current_otp) {
            let u_registration = Object.assign({}, registration);
            u_registration.otp_confirmed = true;

            // update
            return global.dbfn.update(global.db_registrations, registration, u_registration);
          } else {
            reject({
              code: 500,
              message: 'Invalid OTP',
              error: 'INVALID OTP'
            });
          }
        } else {
          reject({
            code: 404,
            message: 'Not a Registration',
            error: 'NOT FOUND'
          });
        }
      })
      .then(updatedRegistration => {
        resolve({
          key: updatedRegistration._id,
          token: updatedRegistration.registration_token,
          otp_confirmed: true
        });
      })
      .catch(err => {
        reject(err);
      });
  });
};


const setPIN = (params) => {
  return new Promise((resolve, reject) => {
    global.dbfn.findOne(global.db_registrations, {
        _id: params._id,
        registration_token: params.registration_token
      })
      .then(registration => {
        if (registration) {
          // set pin
          let u_registration = Object.assign({}, registration);
          u_registration.pin = params.pin

          // update
          return global.dbfn.update(global.db_registrations, registration, u_registration);
        } else {
          reject({
            code: 404,
            message: 'Not a Registration',
            error: 'NOT FOUND'
          });
        }
      })
      .then(updatedRegistration => {
        resolve({
          key: updatedRegistration._id,
          token: updatedRegistration.registration_token,
          pin_set: true
        });
      })
      .catch(err => {
        reject(err);
      });
  });
};


const setCashTag = (params) => {
  return new Promise((resolve, reject) => {
    global.dbfn.findOne(global.db_accounts, {
        cash_tag: params.cash_tag
      })
      .then(account => {
        if (account) {
          reject({
            code: 500,
            message: 'Cash Tag has been used',
            error: 'FOUND'
          });
        } else {
          return global.dbfn.findOne(global.db_registrations, {
            _id: params._id,
            registration_token: params.registration_token
          });
        }
      })
      .then(registration => {
        if (registration) {
          // set cash tag
          let u_registration = Object.assign({}, registration);
          u_registration.cash_tag = params.cash_tag

          // update
          return global.dbfn.update(global.db_registrations, registration, u_registration);
        } else {
          reject({
            code: 404,
            message: 'Not a Registration',
            error: 'NOT FOUND'
          });
        }
      })
      .then(updatedRegistration => {
        resolve({
          key: updatedRegistration._id,
          token: updatedRegistration.registration_token,
          cash_tag_set: true
        });
      })
      .catch(err => {
        reject(err);
      });
  });
};


const approve = (params) => {
  return new Promise((resolve, reject) => {
    let createdAccount = null;

    global.dbfn.findOne(global.db_registrations, {
        _id: params._id,
        registration_token: params.registration_token
      })
      .then(registration => {
        if (!registration) {
          reject({
            code: 404,
            message: 'Not a Registration',
            error: 'NOT FOUND'
          });
        } else {
          // should validate the registration first
          let valid = true;
          valid = valid && registration.card_no && registration.card_no > 0;
          valid = valid && registration.current_otp && registration.otp_confirmed;
          valid = valid && registration.pin && registration.pin > 0;
          valid = valid && registration.cash_tag && registration.cash_tag.length > 0;

          if (!valid) {
            reject({
              code: 500,
              message: 'Invalid registration data',
              error: 'INVALID'
            });
          } else {
            let u_registration = Object.assign({}, registration);
            u_registration.approved = true;

            // update
            return global.dbfn.update(global.db_registrations, registration, u_registration);
          }
        }
      })
      .then(updatedRegistration => {
        // registration approved, creating an account from the registration
        return accountsService.create(updatedRegistration.card_no, updatedRegistration.cash_tag);
      })
      .then(newAccount => {
        createdAccount = newAccount;
        return global.dbfn.findOne(global.db_cards, {
          card_no: newAccount.card_no
        });
      })
      .then(card => {
        let balance = card ? card.initial_balance : 0;
        let parentCashTag = card ? card.creator_cash_tag : '';
        return global.dbfn.update(global.db_accounts, {
          card_no: createdAccount.card_no
        }, {
          $set: {
            balance: balance,
            parent_cash_tag: parentCashTag
          }
        });
      })
      .then(updatedAccount => {
        return accountsService.getByCardNo(createdAccount.card_no);
      })
      .then(account => {
        if (account) {
          resolve({
            key: params._id,
            token: params.registration_token,
            approved: true,
            account: account
          });
        } else {
          reject({
            code: 404,
            message: 'Account not found',
            error: 'NOT FOUND'
          });
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};


const createCard = (cardNo, initialBalance, creatorCashTag) => {
  return new Promise((resolve, reject) => {
    global.dbfn.findOne(global.db_cards, {
        card_no: cardNo,
        creator_cash_tag: creatorCashTag
      })
      .then(card => {
        if (card) {
          card.initial_balance = initialBalance;
          return global.dbfn.update(global.db_cards, {
            card_no: cardNo
          }, d_card);
        } else {
          let d_card = {
            card_no: cardNo,
            initial_balance: initialBalance,
            creator_cash_tag: creatorCashTag
          };
          return global.dbfn.insert(global.db_cards, d_card);
        }
      })
      .then(r_card => {
        resolve(r_card);
      })
      .catch(err => {
        reject(err);
      });
  });
};


// EXPOSE PUBLIC
const Service = {
  create: create,
  confirmOTP: confirmOTP,
  setPIN: setPIN,
  setCashTag: setCashTag,
  approve: approve,
  createCard: createCard
};

module.exports = Service;