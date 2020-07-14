const assert = require("assert").strict;

function solution(A) {
  let distance = -1;
  let counter = 0;
  const fib = [0, 1];

  for (let index = 2; index < A.length / 2; index++) {
    fib[index] = fib[index - 1] + fib[index - 2];
  }

  while (distance < A.length) {
    for (let index = fib.length; index > 0; index--) {
      if (A[distance + fib[index]] === 1 || distance + fib[index] >= A.length) {
        distance += fib[index];
        counter++;
        break;
      }
    }
  }

  return counter;
}

assert.strictEqual(solution([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]), 3);
