const assert = require("assert");

function solution(A) {
  const len = A.length;
  const sum1 = A.reduce((x, y) => x + y);
  const sum2 = (len * (1 + len)) / 2;

  if (sum1 === sum2 && len === Math.max(...A)) {
    return 1;
  }

  return 0;
}

assert.strictEqual(solution([4, 1, 3, 2]), 1);

assert.strictEqual(solution([4, 1, 3]), 0);
