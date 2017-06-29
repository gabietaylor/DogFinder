var dogs = require('../data/dogs.js');
// console.log(dogs);
var path = require('path');
// console.log(path);

// routing 
module.exports = function(app) {
    // API GET Requests 
    app.get('/api/dogs', function(req, res) {
        res.json(dogs);
    });

    // API Requests AJAX response
    app.post('/api/dogs', function(req, res) {
        console.log('req.body.name: ' + req.body.name);
        console.log('req.body.scores.length: ' + req.body.scores.length);

        var results = {};
        var diffMaker = 100;
        // loop through the object
        for (var i = 0; i < dogs.length; i++) {
            var diffArray = [];
            var totalDiff = 0;
            // loops through the score
            // math.abs not return a neg number 
            for (var j = 0; j < dogs[i].scores.length; j++) {
                diffArray.push(Math.abs(req.body.scores[j] - dogs[i].scores[j]))
            };
            console.log('diffArray: ' + diffArray);
            for (var k = 0; k < diffArray.length; k++) {
                totalDiff += diffArray[k];
            }
            // grabs results from users choices
            console.log('totalDiff: ' + totalDiff);
            if (results == {}) {
                results = dogs[i];
                diffMaker = totalDiff;
            } else if (totalDiff < diffMaker) {
                results = dogs[i];
                diffMaker = totalDiff;
            }
            console.log(diffMaker);
        }
        // gives out results
        console.log("Your results is: " + results.name)
        dogs.push(req.body);
        res.json(results);
    });
};