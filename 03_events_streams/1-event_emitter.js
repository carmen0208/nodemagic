var EventEmitter = require('events').EventEmitter;

var getResource = function(c) {
  var emitter = new EventEmitter();
  process.nextTick(function(){
    var count = 0;
    emitter.emit('start');
    var t = setInterval(function() {
      emitter.emit('data', ++count);
      if(count === c) {
        emitter.emit('end', count);
        clearInterval(t);
      }
    }, 10);
  });
  return(emitter);
};

var r = getResource(5);

r.on('start', function() {
  console.log("I've started");
});

r.on('data', function(d) {
  console.log("   I received data -> " + d);
});

r.on('end', function(t) {
  console.log("I'm done, with " + t + " data events.");
});

//node 1-event_emitter.js
// I've started
//    I received data -> 1
//    I received data -> 2
//    I received data -> 3
//    I received data -> 4
//    I received data -> 5
// I'm done, with 5 data events.
