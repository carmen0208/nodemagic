var maxTime = 1000;

// if input is even, double it
// if input is odd, error
var evenDoubler = function(v, callback) {
  var waitTimer = Math.floor(Math.random()*(maxTime+1));
  if(v%2) {
    setTimeout(function() {
      callback(new Error("Odd input"));
    }, waitTimer);
  } else {
    setTimeout(function() {
      callback(null, v*2, waitTimer);
    }, waitTimer);
  }
};

// Version 1:  Named function to process results:
var processResults = function(err, results, time) {
  if(err) {
    console.log("ERROR: " + err.message);
  } else {
    console.log("The results are: " + results + " (" + time + " ms)");
  }
};

// evenDoubler(4, processResults);
// evenDoubler(5, processResults);
//
// console.log("-------");

// the get the ramdon anwser
// -------
// ERROR: Odd input
// The results are: 8 (893 ms)
//
// -------
// The results are: 8 (163 ms)
// ERROR: Odd input

// Version 2:  Use anonymous function and track callbacks to print "Done!" message

var count = 0;
for(var i = 0; i< 10; i++) {
  console.log("Calling evenDoubler for value: " + i);
  evenDoubler(i, function(err, results, time){
    if (err) {
      console.log("ERROR: " + err.message);
    } else {
      console.log("The results are: " + results + " (" + time + " ms)");
    }
    if (++count === 10) {
      console.log("Done!");
    }
  });
}
console.log("-------");

//the value is all ansychronism
// Calling evenDoubler for value: 0
// Calling evenDoubler for value: 1
// Calling evenDoubler for value: 2
// Calling evenDoubler for value: 3
// Calling evenDoubler for value: 4
// Calling evenDoubler for value: 5
// Calling evenDoubler for value: 6
// Calling evenDoubler for value: 7
// Calling evenDoubler for value: 8
// Calling evenDoubler for value: 9
// The results are: 8 (28 ms)
// ERROR: Odd input
// ERROR: Odd input
// The results are: 16 (395 ms)
// ERROR: Odd input
// The results are: 12 (563 ms)
// The results are: 8 (690 ms)
// The results are: 0 (699 ms)
// The results are: 4 (775 ms)
// ERROR: Odd input
// ERROR: Odd input
// ERROR: Odd input
// Done!
