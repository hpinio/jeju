const express = require('express');
const router = express.Router();
const transactionService = require('../../services/transactions.service');


router.post('/', (req, res, next) => {
  let transaction = req.body;
  transactionService.transfer(transaction.from, transaction.to, transaction.amount)
    .then(transaction => {
      if (transaction) {
        res.json({
          d: 'OK'
        });
      } else {
        res.send(500).send({
          code: 500,
          error: 'FAILED',
          message: 'Failed. No Reason'
        });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(error.code).send(error);
    });
});


module.exports = router;