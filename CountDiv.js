const assert = require("assert").strict;

function solution(A, B, K) {
  let counter = 0;
  for (let index = A; index < B; index++) {
    if (index % K === 0) {
      counter += 1;
    }
  }
  return counter;
}

assert.equal(solution(6, 11, 3), 2);
