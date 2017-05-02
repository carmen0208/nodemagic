process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
  process.stdout.write('Data! -> ' + chunk);
});

process.stdin.on('end', function () {
  process.stderr.write('End!\n');
});

process.on('SIGTERM', function() {
    process.stderr.write("Why are you trying to terminate me?!?  :-)");
});

console.log("Node is running as process #" + process.pid);

// node 04_local_system/2-proc-events.js
// Node is running as process #35289
// Hello
// Data! -> Hello
// Carmen will kill me in other term
//##in other teminal:
//##kill TERM 35289
//##kill: illegal pid: TERM
// Data! -> Carmen will kill me in other term
// Why are you trying to terminate me?!?  :-)
