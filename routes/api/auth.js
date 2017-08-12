const express = require('express');
const router = express.Router();
const authService = require('../../services/auth.service');


router.post('/login', (req, res, next) => {
  let cashTag = req.body.cash_tag;
  let pin = req.body.pin;
  authService.login(cashTag, pin)
    .then(accountId => {
      res.json({
        d: accountId
      });
    })
    .catch(err => {
      console.log(err);
      res.status(err.code).send(err);
    });
});

module.exports = router;