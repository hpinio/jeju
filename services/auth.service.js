const global = require('./global');
const accountsService = require('./accounts.service');

const login = (cashTag, pin) => {
  return new Promise((resolve, reject) => {
    pin = parseInt(pin, 10);

    global.dbfn.findOne(global.db_registrations, {
        cash_tag: cashTag
      })
      .then(registration => {
        if (!registration) {
          reject({
            code: 404,
            message: 'Not an account',
            error: 'NOT FOUND'
          });
        } else {
          if (registration.pin === pin) {
            return accountsService.getByCashTag(cashTag);
          } else {
            reject({
              code: 500,
              message: 'Wrong PIN',
              error: 'INVALID'
            });
          }
        }
      })
      .then(account => {
        resolve(account._id);
      })
      .catch(err => {
        reject(err);
      });
  });
};

module.exports = {
  login: login
};