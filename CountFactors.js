const assert = require('assert');

function solution(N) {
  let counter = 2;

  for (let index = 2; index <= N / 2; index++) {
    if (N % index === 0) {
      counter += 1;
    }
  }
  return counter;
}

assert.strictEqual(solution(24), 8);