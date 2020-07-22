const assert = require("assert");

function solution(A, K) {
  let maxResult = 0;
  let replaceableChars = K;
  let pointer1 = 0;
  let pointer2 = 1;

  for (; pointer1 < A.length; ) {
    if (A[pointer1] === A[pointer2]) {
      pointer2++;
    } else if (replaceableChars > 0 && pointer2 < A.length) {
      pointer2++;
      replaceableChars--;
    } else {
      maxResult = Math.max(maxResult, pointer2 - pointer1);
      if (pointer2 >= A.length) {
        break;
      }
      pointer1++;
      pointer2 = pointer1 + 1;
      replaceableChars = K;
    }
  }
  return maxResult;
}

// assert.strictEqual(solution([1, 3, 3, 2], 2), 4);
// assert.strictEqual(solution([4, 5, 5, 4, 2, 2, 4], 0), 2);
// assert.strictEqual(solution([1, 1, 3, 4, 3, 3, 4], 2), 5);
assert.strictEqual(solution([3, 3, 3], 1), 3);
