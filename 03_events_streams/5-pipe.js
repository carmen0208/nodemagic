var request = require('request');

//  Pipe HTML to standard out
var s = request('https://carmen0208.github.io');

s.pipe(process.stdout);

// Chain request and pipe together
//request('https://carmen0208.github.io').pipe(process.stdout);

// Pipe HTML to a file instead of standard out
//request('https://carmen0208.github.io').pipe(fs.createWriteStream('pluralsight.html'));

// Pipe HTML through a gzip stream to a compressed file
//request('https://carmen0208.github.io').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gz'));
