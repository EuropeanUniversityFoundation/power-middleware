var express = require('express');
var router = express.Router();
const path = require("path");

var controller = require('../controller/controller.js');

console.log(__dirname);

router.route('/').get((req, res) => {
  res.status(200);
  res.sendFile('views/homepage.html', {root: '.'});
});

router
  .route('/rest/public-pos')
  .get(controller.getPublicPos);

router
  .route('/rest/institution-pos')
  .get(controller.getInstitutionPos);

router
  .route('/rest/po/:id')
  .get(controller.getSinglePo);

router
  .route('*')
  .get(controller.notFoundRoute);

module.exports = router;