var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
const path = require("path");
var routes = require('./routes/routes.js');

// Whitelist domains
var whitelist = ['http://localhost:3000', 'https://app.power.uni-foundation.eu']
/*var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed'))
    }
  }
}*/

// enable cors
var corsOptions = {
  origin: true,
  methods: 'GET,HEAD',
  credentials: true
};

// const PORT = process.env.PORT || 4000

// Define the port to run on
app.set('port', 4000);

// Add middleware to console log every request
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next(); 
});

// Set static directory before defining routes
app.use('/node_modules', express.static(__dirname + '/node_modules'));

// Uncomment to enable CORS options
app.use(cors(corsOptions));

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