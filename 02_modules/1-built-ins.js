var os = require('os');

var toMB = function(f) {
  return(Math.round((f/1024/1024)*100)/100);
}


console.log('Host: ' + os.hostname());
console.log('15 min. load average: ' + os.loadavg()[2]);
console.log(toMB(os.freemem()) + ' of ' + toMB(os.totalmem()) + ' Mb free');

//node 1-built-ins.js

// Host: carmens-MacBook-Pro.local
// 15 min. load average: 2.6826171875
// 3203.21 of 16384 Mb free
