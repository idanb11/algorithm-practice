const Benchmark = require("benchmark");

var suite1 = new Benchmark.Suite("suite1");

function solution(N) {
  const gaps = [];
  let left1Index = 0;
  let right1Index = 0;

  if (!Number.isSafeInteger(N)) {
    return 0;
  }

  const binary = N.toString(2);

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      left1Index = i;
      right1Index = binary.indexOf("1", i + 1);

      if (right1Index > left1Index) {
        gaps.push(right1Index - left1Index - 1);
      }
    } else {
      continue;
    }
  }
  return gaps.length
    ? gaps.reduce(function (a, b) {
        return Math.max(a, b);
      })
    : 0;
}

function solution2(N) {
  let maxGap = 0;

  if (!Number.isSafeInteger(N)) {
    return 0;
  }

  const binary = N.toString(2);

  for (let i = 1; i < binary.length - 1; i++) {
    const seq = "1" + Array(i).fill(0).join("") + "1";
    if (binary.indexOf(seq) !== -1) {
      maxGap = i;
    }
  }

  return maxGap;
}

function solution3(N) {
  let b = N.toString(2);

  for (let i = b.length - 2; i > 0; i--) {
    let zeros = "1" + Array(i).fill(0) + "1";
    if (b.indexOf(zeros) !== -1) {
      return i;
    }
  }

  return 0;
}

suite1
  .add("solution(12345249)", function () {
    solution(12345249);
  })
  .add("solution2(12345249)", function () {
    solution2(12345249);
  })
  .add("solution3(12345249)", function () {
    solution3(12345249);
  })
  // add listeners
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run();
