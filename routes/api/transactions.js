const express = require('express');
const router = express.Router();
const transactionService = require('../../services/transactions.service');


router.post('/', (req, res, next) => {
  let transaction = req.body;
  transactionService.transfer(transaction.from, transaction.to, transaction.amount)
    .then(transaction => {
      if (transaction) {
        res.json({
          d: transaction
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


router.get('/', (req, res, next) => {
  let filters = {
    cash_tag: req.query.cash_tag,
    from: req.query.from || '01/01/0001',
    to: req.query.to || '01/01/9999',
  };

  transactionService.get(filters)
    .then(transactions => {
      if (transactions) {
        res.json({
          d: transactions
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