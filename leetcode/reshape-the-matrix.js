/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = function (nums, r, c) {
  const arr = nums.flat();
  if (r * c != arr.length) return nums;

  const res = [];
  while (arr.length) res.push(arr.splice(0, c));
  return res;
};

console.log(
matrixReshape(
  [
    [1, 2],
    [3, 4],
  ],
  2,
  4
));
