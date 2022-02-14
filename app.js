var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes/routes.js');

// Define the port to run on
app.set('port', 5000);

// Add middleware to console log every request
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next(); 
});

// Set static directory before defining routes
app.use('/node_modules', express.static(__dirname + '/node_modules'));

// Enable parsing of posted forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add some routing
app.use('/', routes);

// Listen for requests
var server = app.listen(app.get('port'), () => {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});