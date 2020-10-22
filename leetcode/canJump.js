/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
  const len = nums.length;
  if (1 === len) {
    return true;
  }

  if (nums[0] === 0) {
    return false;
  }

  const dp = new Array(len - 1).fill(false);

  dp[len - 1] = true;

  for (let i = len - 2; i >= 0; i--) {
    const element = nums[i];

   
  }

  // return true;

};

console.log(canJump([2, 5, 0, 0]));
console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([0, 2]));
console.log(canJump([1, 2]));
