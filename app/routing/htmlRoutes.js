// Require Path
var path = require('path');
console.log(path);

// client requests
// default to home
module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });
    app.post('/', function(req, res) {
        console.log(req.body)
    });
    // default to survey
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });
    app.post('/survey', function(req, res) {
        console.log(req.body)
    });
}