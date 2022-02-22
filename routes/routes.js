var express = require('express');
var router = express.Router();

var controller = require('../controller/controller.js');

router.route('/').get((req, res) => {
  res.status(200);
  res.send('App is working');
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
  .route('*').get((req, res) => {
    res.status(400);
    res.send('Route not found');
  });

module.exports = router;