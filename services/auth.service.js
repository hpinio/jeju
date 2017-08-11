const neDB = require('nedb');
const path = require('path');


// DB
const db = new neDB({
  filename: path.join('data', 'registrations.db'),
  autoload: true
});


const login = (cardNo, pin) => {
  
};