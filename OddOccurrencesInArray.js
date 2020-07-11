const assert = require("assert");

function solution(A) {
  const results = {};
  for (const item of A) {
    results[item] = results[item] ? results[item] + 1 : 1;
  }

  for (const key in results) {
    if (results[key] % 2 === 1) {
      return Number(key);
    }
  }

  return "Not Found";
}

assert.strictEqual(
  solution([9, 3, 9, 3, 9, 7, 9]),
  7
);

function solution2(A) {
  return A.reduce((x, y) => {
    console.log(`${x}, ${y}`);
    console.log(`${x ^ y}`);
    return x ^ y;
  });
}

assert.strictEqual(
  solution2([9, 3, 9, 3, 9, 7, 9]),
  7
);
