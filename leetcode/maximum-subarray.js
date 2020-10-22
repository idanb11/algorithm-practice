/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let sum = 0;
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    sum < 0 ? (sum = nums[i]) : (sum += nums[i]);
    max = Math.max(max, sum);
  }

  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
