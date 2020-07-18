const assert = require("assert");

const Benchmark = require("benchmark");
const suite1 = new Benchmark.Suite("suite1");

function solution(A) {
  let counter = 0;
  const len = A.length;
  if (len < 3) {
    return counter;
  }

  let pointer1 = 0;
  let pointer2 = 1;
  let pointer3 = 2;

  while (pointer1 < len - 2) {
    if (isTriplet(A, pointer1, pointer2, pointer3)) {
      counter++;
    }
    [pointer1, pointer2, pointer3] = updatePointers(
      pointer1,
      pointer2,
      pointer3,
      len
    );
  }
  return counter;
}

function solution2(A) {
  let counter = 0;
  const len = A.length;
  if (len < 3) {
    return counter;
  }
  A.sort();

  let pointer1 = 0;
  let pointer2 = 1;
  let pointer3 = 2;

  while (pointer1 < len - 2) {
    if (isTriplet(A, pointer1, pointer2, pointer3)) {
      counter++;
    }
    [pointer1, pointer2, pointer3] = updatePointers(
      pointer1,
      pointer2,
      pointer3,
      len
    );
  }
  return counter;
}

function isTriplet(A, P, Q, R) {
  return A[P] + A[Q] > A[R] && A[Q] + A[R] > A[P] && A[R] + A[P] > A[Q];
}

function updatePointers(x, y, z, l) {
  if (z >= l - 1) {
    y++;
    z = y + 1;
    if (y >= l - 1) {
      x++;
      y = x + 1;
      z = y + 1;
    }
  } else {
    z++;
  }

  return [x, y, z];
}

// assert.strictEqual(solution([10, 2, 5, 1, 8, 12]), 4);

// suite1
//   .add("solution(1610612737)", function () {
//     solution([10, 2, 5, 1, 8, 12]);
//   })
//   .add("solution2(1610612737)", function () {
//     solution2([10, 2, 5, 1, 8, 12]);
//   })
//   .on("start", function (event) {
//     console.log(`starting on ${new Date(event.timeStamp)}`);
//   })
//   .on("cycle", function (event) {
//     console.log(String(event.target));
//   })
//   .on("complete", function () {
//     console.log("Fastest is " + this.filter("fastest").map("name"));
//   })
//   .run();

function solution3(A) {
  // write your code in JavaScript (Node.js 4.0.0)

  let start = 0;
  let mid = 1;
  let end = 2;
  let count = 0;

  if (A.length < 3) {
    return 0;
  }

  A.sort(function (a, b) {
    return a - b;
  });

  console.log(A);

  for (start = 0; start < A.length - 2; start++) {
    for (mid = start + 1; mid < A.length - 1; mid++) {
      end = mid + 1;

      while (end < A.length && check(A, start, mid, end)) {
        end++;
      }

      count += end - mid - 1;
    }
  }

  return count;
}

function check(arr, base, mid, end) {
  console.log(base, mid, end);

  if (arr[base] + arr[mid] > arr[end]) return true;

  return false;
}

assert.strictEqual(solution3([10, 2, 5, 1, 8, 12]), 4);
