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

function solution4(N) {
  let n = Number(N);
  n = (n >>> 0).toString(2);

  var re = /0+/g, match, max = 0;
  
  do {
      match = re.exec(n);
      if (match && match[0].length > max) {
          max = match[0].length;
      }
  } while (match);
  return max;
}

suite1
  .add("solution2(1610612737)", function () {
    solution2(1610612737);
  })
  .add("solution3(1610612737)", function () {
    solution3(1610612737);
  })
  .add("solution4(1610612737)", function () {
    solution4(1610612737);
  })
  .add("solution(1610612737)", function () {
    solution(1610612737);
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
