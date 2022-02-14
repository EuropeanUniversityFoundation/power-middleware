var express = require('express');
var router = express.Router();

router.route('/').get((req, res) => {
  res.status(200);
  res.send('App is working');
});

module.exports = router;