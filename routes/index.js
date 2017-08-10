const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('JeJu v1.0.0');
});

module.exports = router;