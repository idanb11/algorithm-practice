const assert = require("assert").strict;

function solution(S) {
  const numOfA = (S.match(/a/g) || []).length;
  let counter = 0;

  if (S.length < 3 || numOfA % 3 !== 0) {
    return counter;
  }

  if (numOfA % 3 !== 0) {
    return counter;
  }

  let pointer1 = 1;
  let pointer2 = 2;
  const len = S.length;

  while (pointer1 < len - 1) {
    if (isValidSlice(S, pointer1, pointer2)) {
      counter++;
    }

    if (pointer2 >= len - 1) {
      pointer1++;
      pointer2 = pointer1 + 1;
    } else {
      pointer2++;
    }
  }

  console.log(counter);
  return counter;
}

function isValidSlice(S, p1, p2) {
  const pcs1 = S.slice(0, p1);
  const pcs2 = S.slice(p1, p2);
  const pcs3 = S.slice(p2);

  return (
    (pcs1.match(/a/g) || []).length === (pcs2.match(/a/g) || []).length &&
    (pcs2.match(/a/g) || []).length === (pcs3.match(/a/g) || []).length
  );
}

assert.strictEqual(solution("babaa"), 2);
assert.strictEqual(solution("ababa"), 4);
assert.strictEqual(solution("aba"), 0);
assert.strictEqual(solution("bbbbb"), 6);

