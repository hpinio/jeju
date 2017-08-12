const express = require('express');
const router = express.Router();
const accountsService = require('../../services/accounts.service');


// create account
router.post('/', (req, res, next) => {
  let id = req.params.id;
  let account = req.body;
  accountsService.create(account.card_no, account.cash_tag)
    .then(account => {
      res.json({
        d: account
      });
    })
    .catch(error => {
      console.log(error);
      res.status(error.code).send(error);
    });
});


// get by card
router.get('/bycard/:cardNo', (req, res, next) => {
  let cardNo = req.params.cardNo;
  accountsService.getByCardNo(cardNo)
    .then(account => {
      res.json({
        d: account
      });
    })
    .catch(error => {
      console.log(error);
      res.status(error.code).send(error);
    });
});


// get by id
router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  accountsService.getById(id)
    .then(account => {
      res.json({
        d: account
      });
    })
    .catch(error => {
      console.log(error);
      res.status(error.code).send(error);
    });
});



// create allocation
router.post('/:id/allocations', (req, res, next) => {
  let id = req.params.id;
  let allocation = req.body;
  accountsService.addAllocation(id, allocation)
    .then(account => {
      res.json({
        d: account
      });
    })
    .catch(error => {
      console.log(error);
      res.status(error.code).send(error);
    });
});


// update allocation
router.put('/:id/allocations/:allocation_id', (req, res, next) => {
  let id = req.params.id;
  let allocation_id = req.params.allocation_id;
  let allocation = req.body;
  allocation._id = allocation_id;
  accountsService.updateAllocation(id, allocation)
    .then(account => {
      res.json({
        d: account
      });
    })
    .catch(error => {
      console.log(error);
      res.status(error.code).send(error);
    });
});


// delete allocation
router.delete('/:id/allocations/:allocation_id', (req, res, next) => {
  let id = req.params.id;
  let allocation_id = req.params.allocation_id;
  let allocation = req.body;
  allocation._id = allocation_id;
  accountsService.deleteAllocation(id, allocation)
    .then(account => {
      res.json({
        d: account
      });
    })
    .catch(error => {
      console.log(error);
      res.status(error.code).send(error);
    });
});



// allocate 
router.post('/:id/allocations/:allocation_id/transactions', (req, res, next) => {
  let id = req.params.id;
  let allocation_id = req.params.allocation_id;
  let allocation = req.body;
  allocation._id = allocation_id;
  accountsService.allocate(id, allocation)
    .then(account => {
      res.json({
        d: account
      });
    })
    .catch(error => {
      console.log(error);
      res.status(error.code).send(error);
    });
});



module.exports = router;