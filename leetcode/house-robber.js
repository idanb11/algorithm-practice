/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  if (!nums || nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  let answer = 0;

  for (let index = 2; index < nums.length - 1; index++) {
    const firstSum = nums[index] + (nums[index - 2] || 0);
    const secondSum = nums[index + 1] + (nums[index - 1] || 0);

    if (firstSum > secondSum) {
      if (!answer) answer += nums[index - 2] || 0;
      answer += nums[index];
    } else {
      if (!answer) answer += nums[index - 1] || 0;
      answer += nums[index + 1];
      index++;
    }
  }
  return answer;
};

// console.log(rob([2, 7, 9, 3, 9, 2]));
// console.log(rob([1, 2, 3, 1]));
console.log(rob([1, 1]));
