/**
 * Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.
 * The answer is guaranteed to fit in a 32-bit integer.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = function(nums, target) {
  const dp = new Array(target + 1).fill(0);

  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] <= i) {
        dp[i] += dp[i - nums[j]];
      }
    }
  }

  return dp[target];
};


console.log(combinationSum4([1, 2, 3], 4));
