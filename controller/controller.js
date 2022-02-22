const axios = require('axios');
require('dotenv').config()

module.exports.getPublicPos = (req, res) => {
  console.log('GET Public Pos');

  const headers = {headers: {'api-key': process.env.POWER_API_KEY}}
  
  axios.get(process.env.API_URL+'/rest/public-pos', headers)
  .then((result) => {
    res
      .json(result.data);
  })
  .catch((error) => {
    console.log("Error getting data");
    res
      .status(500)
      .json(err);
  })
};

module.exports.getInstitutionPos = (req, res) => {
  console.log('GET Institution Pos');

  const headers = {headers: {'api-key': process.env.POWER_API_KEY}}
  
  axios.get(process.env.API_URL+'/rest/institution-pos', headers)
  .then((result) => {
    res
      .json(result.data);
  })
  .catch((error) => {
    console.log("Error getting data");
    res
      .status(500)
      .json(err);
  })
};

module.exports.getSinglePo = (req, res) => {
  console.log('GET Single Po');

  var id = req.params.id;

  const headers = {headers: {'api-key': process.env.POWER_API_KEY}}
  
  axios.get(process.env.API_URL+'/rest/po/'+id, headers)
  .then((result) => {
    res
      .json(result.data);
  })
  .catch((error) => {
    console.log("Error getting data");
    res
      .status(500)
      .json(err);
  })
};

module.exports.notFoundRoute = (req, res) => {
  console.log('Not found route');

  res.status(400);
  res.json({"message": "Route not found"});
};