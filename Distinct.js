const assert = require("assert").strict;
const Benchmark = require("benchmark");

var suite = new Benchmark.Suite("suite");

function solution(A) {
  const A_Set = new Set(A);
  return A_Set.size;
}

function solution2(A) {
  var seen = [];
  var count = 0;
  var len = A.length;
  for (var i = 0; i < len; i++) {
    var item = A[i];
    if (seen[item] !== 1) {
      seen[item] = 1;
      count++;
    }
  }
  return count;
}

suite
  .add("solution()", function () {
    solution([2, 1, 1, 2, 3, 1]);
  })
  .add("solution2()", function () {
    solution2([2, 1, 1, 2, 3, 1]);
  })
  .on("start", function (event) {
    console.log(`starting on ${new Date(event.timeStamp)}`);
  })
  // add listeners
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run();

// assert.strictEqual(solution([2, 1, 1, 2, 3, 1]), 3);
