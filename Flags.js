const assert = require('assert');

function solution(A) {
  const peaks = [];
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i] > A[i + 1] && A[i] > A[i - 1]) {
      peaks.push(i);
    }
  }

  let counter = peaks.length;

  for (let k = peaks.length - 1; k > 1 ; k--) {
    if (peaks[k] - peaks[k - 1] < peaks.length) {
      counter--;
    }
  }
  return counter;
}


assert.strictEqual(solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]), 3);

assert.strictEqual(solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 2]), 2);
