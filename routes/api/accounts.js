const express = require('express');
const router = express.Router();
const accountsService = require('../../services/accounts.service');


// get by id
router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  accountsService.getById(id)
    .then((account) => {
      if (account) {
        res.json({
          d: account
        });
      } else {
        res.status(404).send();
      }
    }, (err) => {
      res.status(500).send({
        error: err
      });
    })
    .catch((error) => {
      console.log(error);
    });
});


// create allocation
router.post('/:id/allocations', (req, res, next) => {
  let id = req.params.id;
  let allocation = req.body;
  accountsService.addAllocation(id, allocation)
    .then((account) => {
      if (account) {
        res.json({
          d: account
        });
      } else {
        res.status(404).send();
      }
    }, (err) => {
      res.status(500).send({
        error: err
      });
    })
    .catch((error) => {
      console.log(error);
    });
});


// update allocation
router.put('/:id/allocations', (req, res, next) => {
  let id = req.params.id;
  let allocation = req.body;
  accountsService.updateAllocation(id, allocation)
    .then((account) => {
      if (account) {
        res.json({
          d: account
        });
      } else {
        res.status(404).send();
      }
    }, (err) => {
      res.status(500).send({
        error: err
      });
    })
    .catch((error) => {
      console.log(error);
    });
});


module.exports = router;