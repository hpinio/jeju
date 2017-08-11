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
  }
];


const findAccountAllocationCategoryById = (account, category) => {
  let found = null;
  for (let index = 0; index < account.allocations.length; index++) {
    let allocation = account.allocations[index];
    if (allocation.category === category) {
      found = allocation;
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


module.exports = {
  DATE_FORMAT: DATE_FORMAT,
  allocation_categories: allocation_categories,
  allocation_types: allocation_types,
  fn: {
    findAccountAllocationCategoryById: findAccountAllocationCategoryById,
    findAllocationCategoryById: findAllocationCategoryById,
    findAllocationTypeById: findAllocationTypeById,
  }
};