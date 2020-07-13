const assert = require("assert");

function solution(A) {
  for (let index = 1; index < A.length; index++) {
    if (!A.includes(index)) {
      return index;
    }
  }
  return A.length + 1;
}

assert.strictEqual(solution([1, 3, 6, 4, 1, 2]), 5);
assert.strictEqual(solution([1, 2, 3]), 4);
assert.strictEqual(solution([-1, -3]), 1);
