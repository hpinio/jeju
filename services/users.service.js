const neDB = require('nedb');
const path = require('path');


// DB
const db = new neDB({
  filename: path.join('data', 'users.db'),
  autoload: true
});


// MODEL RELATED

const schema = (json) => {
  let user = {
    first_name: null,
    last_name: null,
    email: null,
    gender: null,
    ip_address: null,
    cash_tag: null,
  };
  if (json) {
    user.first_name = json.first_name;
    user.last_name = json.last_name;
    user.email = json.email;
    user.gender = json.gender;
    user.ip_address = json.ip_address;
    user.cash_tag = json.cash_tag;
    if (json._id) {
      user._id = json._id;
    }
  }
  return user;
};

const validate = (user) => {
  let valid = true;
  valid = valid && user.first_name && user.first_name.length;
  valid = valid && user.email && user.email.length;
  valid = valid && user.ip_address && user.ip_address.length;
  return valid;
};


// SETUP DB
const setup = (usersJson) => {
  usersJson.forEach(function (userJson) {
    const o_user = schema(userJson);
    if (validate(o_user)) {
      db.insert(o_user, (err, newUser) => {
        if (err) {
          console.log('cannot insert user', err);
        } else {
          console.log('inserted new user', newUser._id);
        }
      });
    } else {
      console.log('user invalid', user);
    }
  }, this);
};

// GET ALL
const get = () => {
  return new Promise((resolve, reject) => {
    db
      .find({})
      .sort({
        first_name: 1
      })
      .exec((err, docs) => {
        if (err) {
          reject(err);
        } else {
          resolve(docs);
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
          resolve(doc);
        }
      });
  });
};

// CREATE
const create = (userJson) => {
  return new Promise((resolve, reject) => {
    let user = schema(userJson);
    if (validate(user)) {
      db.insert(user, (err, newUser) => {
        if (err) {
          reject({
            code: 500,
            message: 'Cannot insert data. Something is wrong in the server.',
            error: err
          });
        } else {
          resolve(newUser);
        }
      });
    } else {
      reject({
        code: 400,
        message: 'Cannot insert data. Invalid input.',
        error: null
      });
    }
  });
};

// UPDATE
const update = (userJson) => {
  return new Promise((resolve, reject) => {
    let user = schema(userJson);
    if (validate(user)) {
      db.findOne({
        _id: user._id
      }, (err, doc) => {
        if (err) {
          reject({
            code: 404,
            message: 'Data not found.',
            error: null
          });
        } else {
          let u_doc = Object.assign({}, doc, user);
          let query = {
            _id: doc._id
          };
          db.update(query, u_doc, {}, (err, numberOfUpdated) => {
            if (err) {
              reject({
                code: 500,
                message: 'Cannot update data. Something is wrong in the server.',
                error: err
              });
            } else {
              resolve(u_doc);
            }
          });
        }
      });
    } else {
      reject({
        code: 400,
        message: 'Cannot update data. Invalid input.',
        error: null
      });
    }
  });
};

// DELETE
const deleteById = (id) => {
  return new Promise((resolve, reject) => {
    db.findOne({
      _id: id
    }, (err, doc) => {
      if (err) {
        reject({
          code: 404,
          message: 'Data not found.',
          error: null
        });
      } else {
        // make a copy first
        let copied = Object.assign({}, doc);
        // then remove
        db.remove({
          _id: doc._id
        }, {}, (err, numRemoved) => {
          if (err) {
            reject({
              code: 500,
              message: 'Cannot remove data. Something is wrong in the server.',
              error: err
            });
          } else {
            resolve(copied);
          }
        });
      }
    });
  });
};

// EXPOSE PUBLIC
const Service = {
  setup: setup,
  get: get,
  getById: getById,
  create: create,
  update: update,
  deleteById: deleteById,
};

module.exports = Service;