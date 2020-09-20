/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
  if (!nums && !nums.length) {
    return -1;
  }

  if (nums.length === 1) {
    return nums[0];
  }

  if (nums.length === 2) {
    return -1;
  }

  let leftSum = 0;
  let pivotIndex = 0;
  let rightSum = nums.slice(1).reduce((a, b) => a + b, 0);

  for (let index = 1; index <= nums.length; index++) {
    if (leftSum === rightSum) {
      return pivotIndex;
    } else {
      pivotIndex = index;
      leftSum = nums.slice(0, pivotIndex).reduce((a, b) => a + b, 0);
      rightSum = nums.slice(pivotIndex + 1).reduce((a, b) => a + b, 0);
    }
  }

  return -1;
};

console.log(pivotIndex([-1, -1, 0, 1, 1, 0]));
