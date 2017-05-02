console.log("stdout is writable? " + process.stdout.writable);

process.stdout.write("Hello");
process.stdout.write("World");

//node 03_events_streams/4-writable-stream.js
// stdout is writable? true
// HelloWorld%
