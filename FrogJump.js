const assert = require("assert");

function solution(X, Y, D) {
  return Math.ceil((Y - X) / D);
}

assert.strictEqual(solution(10, 85, 30), 3);

