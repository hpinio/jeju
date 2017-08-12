const express = require('express');
const router = express.Router();
const registrationService = require('../../services/registration.service');


// create new registration
router.post('/', (req, res, next) => {
  let cardNo = req.body.card_no;
  let initialBalance = req.body.initial_balance;
  registrationService.setCardInitialBalance(cardNo, initialBalance)
    .then(card => {
      res.json({
        d: card
      });
    })
    .catch(err => {
      console.log(err);
      res.status(err.code).send(err);
    });
});

module.exports = router;