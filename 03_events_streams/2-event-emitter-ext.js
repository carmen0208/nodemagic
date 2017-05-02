var Resource = require('./resource');

var resource = new Resource(7);


resource.on('start', function() {
  console.log("I've started!");
});

resource.on('data', function(d) {
  console.log("   I received data -> " + d);
});

resource.on('end', function(t) {
  console.log("I'm done, with " + t + " data events.");
});

// node 2-event-emitter-ext.js
// I've started!
//    I received data -> 1
//    I received data -> 2
//    I received data -> 3
//    I received data -> 4
//    I received data -> 5
//    I received data -> 6
//    I received data -> 7
// I'm done, with 7 data events.
