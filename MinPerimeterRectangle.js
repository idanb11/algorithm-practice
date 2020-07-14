const assert = require("assert");

function solution(N) {
  // write your code in JavaScript (Node.js 6.4.0)
  for (let i = parseInt(Math.sqrt(N).toString(), 10); true; i--)
    if (N % i == 0) return 2 * i + 2 * (N / i);
}

assert.strictEqual(solution(1), 4);
assert.strictEqual(solution(30), 22);
assert.strictEqual(solution(48), 28);
assert.strictEqual(solution(1), 4);
