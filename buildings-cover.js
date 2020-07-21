const assert = require("assert").strict;

function solution(H) {
  if (H.length === 1) {
    return H[0];
  }

  const results = [];
  results.push(getBannersArea([H, []]));

  for (let index = 0; index < H.length - 1; index++) {
    const slices = [H.slice(0, index + 1), H.slice(index + 1)];
    results.push(getBannersArea(slices));
  }

  return Math.min(...results);
}

function getBannersArea(slices) {
  const banner1 = Math.max(...slices[0]) * slices[0].length || 0;
  const banner2 = Math.max(...slices[1]) * slices[1].length || 0;

  return banner1 + banner2;
}

assert.strictEqual(solution([3]), 3);
assert.strictEqual(solution([3, 1, 4]), 10);
assert.strictEqual(solution([5, 3, 2, 4]), 17);
assert.strictEqual(solution([5, 3, 5, 2, 1]), 19);
assert.strictEqual(solution([7, 7, 3, 7, 7]), 35);
assert.strictEqual(solution([1, 1, 7, 6, 6, 6]), 30);
