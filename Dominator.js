const assert = require("assert").strict;

function solution(A) {
  const obj = {};

  for (let index = 0; index < A.length; index++) {
    const element = A[index];
    obj[element] = obj[element] ? obj[element] + 1 : 1;
  }

  const max = Math.max(...Object.values(obj));
  if (max > A.length / 2) {
    for (const [key, value] of Object.entries(obj)) {
      if (value === max) {
        return Number(key);
      }
    }
  } else {
    return -1;
  }
}

function solution2(A) {
  const obj = {};
  const threshold =  (A.length / 2) + 1;

  for (let index = 0; index < A.length; index++) {
    const element = A[index];
    obj[element] = obj[element] ? obj[element] + 1 : 1;

    if ( obj[element] === threshold) {
      return index;
    }
  }

  return -1;
}

assert.strictEqual(solution2([3, 4, 3, 2, 3, -1, 3, 3]), 7);
assert.strictEqual(solution2([1]), -1);
