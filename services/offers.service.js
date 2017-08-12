const moment = require('moment');
const global = require('./global');


const getAll = (filters) => {
  return new Promise((resolve, reject) => {
    let data = [{
        "_id": "C9UTeZ4K1L1tsAYu",
        "merchant_name": "Huels Inc",
        "product_name": "Beef - Ground Medium",
        "description": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
        "point_price": 57
      },
      {
        "_id": "C9UTeZ4K1L2tsAYu",
        "merchant_name": "Kertzmann-Fadel",
        "product_name": "Sausage - Breakfast",
        "description": "Vivamus vestibulum sagittis sapien.",
        "point_price": 66
      },
      {
        "_id": "C9UTeZ4K1L3tsAYu",
        "merchant_name": "Kling, Bogisich and Barrows",
        "product_name": "Pepper - Jalapeno",
        "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
        "point_price": 80
      },
      {
        "_id": "C9UTeZ4K1L4tsAYu",
        "merchant_name": "Greenfelder LLC",
        "product_name": "Pork - Liver",
        "description": "In hac habitasse platea dictumst.",
        "point_price": 27
      },
      {
        "_id": "C9UTeZ4K1L5tsAYu",
        "merchant_name": "O'Hara, Ratke and Brekke",
        "product_name": "Veal - Osso Bucco",
        "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
        "point_price": 56
      },
      {
        "_id": "C9UTeZ4K1L6tsAYu",
        "merchant_name": "Bashirian-Feil",
        "product_name": "Bread - Wheat Baguette",
        "description": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "point_price": 38
      },
      {
        "_id": "C9UTeZ4K1L7tsAYu",
        "merchant_name": "Klein-Spinka",
        "product_name": "Alize Red Passion",
        "description": "Morbi non lectus.",
        "point_price": 13
      }
    ];
    resolve(data);
    // global.dbfn.find(global.db_offers, {})
    //   .then(data => {
    //     resolve(data);
    //   })
    //   .catch(err => {
    //     reject(err);
    //   });
  });
};


module.exports = {
  getAll: getAll
};