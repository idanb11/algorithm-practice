/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
  let lowest;
  let highest;
  let maxResult = 1;

  if (nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0];
  }

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    if (element < 0) {
    } else {
      console.log(element);
      if (maxResult * element > maxResult) {
        maxResult = maxResult * element;
      } else {
        maxResult = Math.max(maxResult, element);
      }
    }
  }

  return maxResult;
};

console.log(maxProduct([2, 3, 0, 4]));
