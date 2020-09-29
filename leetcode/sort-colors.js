/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
  let zeros = 0;
  let ones = 0;

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    if (element === 0) {
      zeros++;
    } else if (element === 1) {
      ones++;
    }
  }

  return nums
    .fill(0, 0, zeros)
    .fill(1, zeros, zeros + ones)
    .fill(2, zeros + ones);
};

console.log(sortColors([2, 0, 1]));
