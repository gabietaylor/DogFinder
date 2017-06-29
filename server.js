var express = require('express');
//console.log(express);
var bodyParser = require('body-parser');
//console.log(bodyParser);
var path = require('path');
//console.log(path);


var PORT = process.env.PORT || 3000;
var app = express();

// function to parse to JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

// the main client pages
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

// listening
app.listen(PORT, function() {
    console.log('Server Listening on %d', PORT)
});