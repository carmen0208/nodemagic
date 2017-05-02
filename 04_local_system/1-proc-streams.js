process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
  process.stdout.write('Data! -> ' + chunk);
});

process.stdin.on('end', function () {
  process.stderr.write('End!\n');
});

// //node 04_local_system/1-proc-streams.js
// Hello
// Data! -> Hello
// World
// Data! -> World
// #control+D
// End!
