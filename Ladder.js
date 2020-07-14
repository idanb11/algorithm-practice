const assert = require("assert").strict;

function solution(A, B) {
  let fibs = [1, 1];
  const results = [];

  for (let index = 0; index < A.length; index++) {
    const element = A[index];
    fibs = getFibs(fibs, element);
    const result = fibs[element] % Math.pow(2, B[index]);
    results.push(result);
  }

  return results;
}

function getFibs(fibs, number) {
  const max = Math.pow(2, 30);
  if (fibs[number]) {
    return fibs;
  }

  for (let index = fibs.length; index <= number; index++) {
    fibs[index] = fibs[index - 1] + fibs[index - 2] % max;
  }

  return fibs;
}

assert.deepStrictEqual(solution([4, 4, 5, 5, 1], [3, 2, 4, 3, 1]), [5, 1, 8, 0, 1]);
