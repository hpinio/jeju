const express = require('express');
const router = express.Router();
const registrationService = require('../../services/registration.service');


// create new registration
router.post('/', (req, res, next) => {
  if (!req.body || !req.body.hasOwnProperty('card_no')) {
    res.send(400).send('Invalid post body');
  }

  let cardNo = req.body.card_no;
  registrationService.create(cardNo)
    .then(registration => {
      res.json({
        d: registration
      });
    })
    .catch(err => {
      console.log(err);
      res.status(err.code).send(err);
    });
});


// create an OTP confirmation
router.post('/otp_confirmation', (req, res, next) => {
  // make sure body has token and key and otp
  if (!req.body || !(req.body.hasOwnProperty('otp') && req.body.hasOwnProperty('key') && req.body.hasOwnProperty('token'))) {
    res.send(400).send('Invalid post body');
  }

  let otp = req.body.otp;
  let key = req.body.key;
  let token = req.body.token;
  registrationService.confirmOTP({
      _id: key,
      registration_token: token,
      current_otp: parseInt(otp, 10)
    })
    .then(registration => {
      res.json({
        d: registration
      });
    })
    .catch(err => {
      console.log(err);
      res.status(err.code).send(err);
    });
});


// create registration PIN
router.post('/pin', (req, res, next) => {
  // make sure body has token and key and pin
  // TODO: should encrypt? 
  if (!req.body || !(req.body.hasOwnProperty('pin') && req.body.hasOwnProperty('key') && req.body.hasOwnProperty('token'))) {
    res.send(400).send('Invalid post body');
  }

  let pin = req.body.pin;
  let key = req.body.key;
  let token = req.body.token;
  registrationService.setPIN({
      _id: key,
      registration_token: token,
      pin: parseInt(pin, 10)
    })
    .then(registration => {
      res.json({
        d: registration
      });
    })
    .catch(err => {
      console.log(err);
      res.status(err.code).send(err);
    });
});


// set the cash tag
router.post('/cash_tag', (req, res, next) => {
  // make sure body has token and key and cash_tag
  if (!req.body || !(req.body.hasOwnProperty('cash_tag') && req.body.hasOwnProperty('key') && req.body.hasOwnProperty('token'))) {
    res.send(400).send('Invalid post body');
  }

  let cash_tag = req.body.cash_tag;
  let key = req.body.key;
  let token = req.body.token;
  registrationService.setCashTag({
      _id: key,
      registration_token: token,
      cash_tag: cash_tag
    })
    .then(registration => {
      res.json({
        d: registration
      });
    })
    .catch(err => {
      console.log(err);
      res.status(err.code).send(err);
    });
});


// approve registration
router.post('/approval', (req, res, next) => {
  // make sure body has token and key and cash_tag
  if (!req.body || !(req.body.hasOwnProperty('key') && req.body.hasOwnProperty('token'))) {
    res.send(400).send('Invalid post body');
  }

  let key = req.body.key;
  let token = req.body.token;
  registrationService.approve({
      _id: key,
      registration_token: token,
    })
    .then(registration => {
      res.json({
        d: registration
      });
    })
    .catch(err => {
      console.log(err);
      res.status(err.code).send(err);
    });
});


module.exports = router;