const express = require('express');
const router = express.Router();
const offersService = require('../../services/offers.service');


router.get('/', (req, res, next) => {
  let filters = {};

  offersService.getAll(filters)
    .then(data => {
      res.json({
        d: data
      });
    })
    .catch(error => {
      console.log(error);
      res.status(error.code).send(error);
    });
});


module.exports = router;