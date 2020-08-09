const assert = require("assert").strict;

function solution(A, B) {
  let maxNonOverlappingSegment = 1;
  let last = B[0];

  for (let index = 1; index < A.length; index++) {
    if (A[index] > last) {
      maxNonOverlappingSegment++;
      last = B[index];
    }
  }
  return maxNonOverlappingSegment;
}

assert.strictEqual(solution([1, 3, 7, 9, 9], [5, 6, 8, 9, 10]), 3);
