var express = require('express');
//console.log(express);
var bodyParser = require('body-parser');
//console.log(bodyParser);
var path = require('path');
//console.log(path);


var PORT = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(express.static('app/public'));

require('./app/routing/htmlRoutes.js')(app);
// require('./app/routing/apiRoutes.js')(app);

app.listen(PORT, function(){

	console.log('Server Listening on %d', PORT)
});