const allocation_types = [{
    id: 1,
    name: 'Needs'
  },
  {
    id: 2,
    name: 'Wants'
  },
  {
    id: 3,
    name: 'Dreams'
  },
];

const allocation_categories = [{
    id: 1,
    name: 'Tuition',
    type: 1
  },
  {
    id: 2,
    name: 'Savings',
    type: 3
  },
  {
    id: 3,
    name: 'Pocket Money',
    type: 2
  },
  {
    id: 4,
    name: 'Movies',
    type: 2
  },
  {
    id: 5,
    name: 'Stationary',
    type: 1
  },
  {
    id: 6,
    name: 'F&B',
    type: 2
  },
  {
    id: 7,
    name: 'Gadgets',
    type: 2
  }
];


// const findAccountAllocationCategoryById = (account, category) => {
//   let found = null;
//   for (let index = 0; index < account.allocations.length; index++) {
//     let allocation = account.allocations[index];
//     if (allocation.category === category) {
//       found = allocation;
//       break;
//     }
//   }
//   return found;
// };


const findAccountAllocationById = (account, _id) => {
  let found = null;
  for (let index = 0; index < account.allocations.length; index++) {
    let allocation = account.allocations[index];
    if (allocation._id === _id) {
      found = allocation;
      break;
    }
  }
  return found;
};

// const findIndexOfAccountAllocationCategoryById = (account, category) => {
//   let found = -1;
//   for (let index = 0; index < account.allocations.length; index++) {
//     let allocation = account.allocations[index];
//     if (allocation.category === category) {
//       found = index;
//       break;
//     }
//   }
//   return found;
// };

const findIndexOfAccountAllocationById = (account, _id) => {
  let found = -1;
  for (let index = 0; index < account.allocations.length; index++) {
    let allocation = account.allocations[index];
    if (allocation._id === _id) {
      found = index;
      break;
    }
  }
  return found;
};


const findAllocationCategoryById = (category) => {
  let found = null;
  for (let index = 0; index < allocation_categories.length; index++) {
    let allocation = allocation_categories[index];
    if (allocation.id === category) {
      found = allocation;
      break;
    }
  }
  return found;
};


const findAllocationTypeById = (type) => {
  let found = null;
  for (let index = 0; index < allocation_types.length; index++) {
    let allocation = allocation_types[index];
    if (allocation.id === type) {
      found = allocation;
      break;
    }
  }
  return found;
}


const DATE_FORMAT = 'DD/MM/YYYY';


const dbFind = (db, query) => {
  return new Promise((resolve, reject) => {
    db.find(query, (err, doc) => {
      if (err) {
        reject({
          code: 500,
          message: 'Server Error',
          error: err
        });
      } else {
        resolve(doc);
      }
    });
  });
};

const dbFindOne = (db, query) => {
  return new Promise((resolve, reject) => {
    db.findOne(query, (err, doc) => {
      if (err) {
        reject({
          code: 500,
          message: 'Server Error',
          error: err
        });
      } else {
        resolve(doc);
      }
    });
  });
};

const dbInsert = (db, doc) => {
  return new Promise((resolve, reject) => {
    db.insert(doc, (err, newDoc) => {
      if (err) {
        reject({
          code: 500,
          message: 'Server Error',
          error: err
        });
      } else {
        resolve(newDoc);
      }
    });
  });
};

const dbUpdate = (db, query, u_doc) => {
  return new Promise((resolve, reject) => {
    db.update(query, u_doc, {}, (err, numberOfUpdated) => {
      if (err) {
        reject({
          code: 500,
          message: 'Server Error',
          error: err
        });
      } else {
        resolve(u_doc);
      }
    });
  });
};

const dbDelete = (db, query) => {
  return new Promise((resolve, reject) => {
    db.remove(query, {}, (err, numRemoved) => {
      if (err) {
        reject({
          code: 500,
          message: 'Server Error',
          error: err
        });
      } else {
        resolve(numRemoved);
      }
    });
  });
};


function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

module.exports = {
  DATE_FORMAT: DATE_FORMAT,
  allocation_categories: allocation_categories,
  allocation_types: allocation_types,
  fn: {
    // findAccountAllocationCategoryById: findAccountAllocationCategoryById,
    findAccountAllocationById: findAccountAllocationById,
    // findIndexOfAccountAllocationCategoryById: findIndexOfAccountAllocationCategoryById,
    findIndexOfAccountAllocationById: findIndexOfAccountAllocationById,
    findAllocationCategoryById: findAllocationCategoryById,
    findAllocationTypeById: findAllocationTypeById,
    uuidv4: uuidv4
  },
  db: {
    find: dbFind,
    findOne: dbFindOne,
    insert: dbInsert,
    update: dbUpdate,
    delete: dbDelete,
  }
};