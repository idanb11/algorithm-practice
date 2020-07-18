const assert = require("assert").strict;

function solution(S, X, Y) {
  const data = {};
  let max = 0;
  let counter = 0;

  if (S.length === 1) {
    return 1;
  }

  for (let index = 0; index < S.length; index++) {
    const tag = S[index];

    if (!data[tag]) {
      data[tag] = [X[index], Y[index]];
    } else {
      if (
        Math.max(Math.abs(data[tag][0]), Math.abs(data[tag][1])) <=
        Math.max(Math.abs(X[index]), Math.abs(Y[index]))
      ) {
        max = Math.max(Math.abs(X[index]), Math.abs(Y[index]));
      } else {
        data[tag] = [X[index], Y[index]];
      }
    }
  }

  for (const tag in data) {
    if (data[tag][0] ** 2 + data[tag][1] ** 2 < max ** 2 + max ** 2) {
      counter++;
    }
  }

  return counter;
}

assert.strictEqual(solution("ABB", [1, 2, -2], [1, -2, 2]), 1);
assert.strictEqual(solution("CCD", [1, -1, 2], [1, -1, 2]), 0);
assert.strictEqual(solution("ABDCA", [2, -1, -4, -3, 3], [2, -2, 4, 1, -3]), 3);
