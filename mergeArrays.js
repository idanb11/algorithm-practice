const assert = require("assert").strict;

function mergeArrays(arry1, arry2) {
  let index1 = 0;
  let index2 = 0;
  const result = [];

  while (arry1[index1] || arry2[index2]) {
    if (arry1[index1] < arry2[index2]) {
      result.push(arry1[index1]);
      index1++;
    } else {
      result.push(arry2[index2]);
      index2++;
    }
  }
  return result;
}

assert.deepStrictEqual(
  mergeArrays([3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19]),
  [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
);
