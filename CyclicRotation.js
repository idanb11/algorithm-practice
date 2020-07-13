const assert = require('assert');

function solution(A, K) {
  let newArray = [...A];

  for (let i = 0 ; i < K; i++) {
    newArray.unshift(newArray[newArray.length - 1]);
    newArray.pop();
  }

  return newArray;
}


assert.deepStrictEqual(solution([3, 8, 9, 7, 6], 3), [9, 7, 6, 3, 8]);
assert.deepStrictEqual(solution([0, 0, 0], 1), [0, 0, 0]);
assert.deepStrictEqual(solution([1, 2, 3, 4], 4), [1, 2, 3, 4]);