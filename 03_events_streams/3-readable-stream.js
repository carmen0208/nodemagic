var request = require('request');
var s = request('https://carmen0208.github.io');

s.on('data', function(chunk){
  console.log(">>>>>>>>>>>>>>Data>>>>>>>>>>>>>" + chunk);
});

s.on('end', function(){
  console.log(">>>>>>Done!>>>>>>>>>>>");
});
