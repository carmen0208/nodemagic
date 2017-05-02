// Be sure to run "npm install request" in this directory
// before running this script
var request = require('request');

request('https://carmen0208.github.io/', function(error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(body);
    }
});

//npm install request
//node 3-npm-modules.js
