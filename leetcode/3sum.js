/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  const res = [];
  if (nums.length < 3) {
    return res;
  }

  nums.sort((a, b) => a - b);

  for (let index = 0; index < nums.length - 2; index++) {
    const currentTarget = 0 - nums[index];
    if (index > 0 && nums[index] === nums[index - 1]) continue;

    let start = index + 1;
    let end = nums.length - 1;

    while (end > start) {
      if (start === index) {
        start++;
        continue;
      }
      const sum = nums[start] + nums[end];
      if (sum === currentTarget) {
        res.push([nums[index], nums[start], nums[end]]);
        // break;
        while (nums[start] === nums[start + 1]) start++;
        while (nums[end] === nums[end - 1]) end--;

        start++;
        end--;
      } else if (sum > currentTarget) {
        end--;
      } else if (sum < currentTarget) {
        start++;
      }
    }
  }

  return res;
};

console.log(threeSum([-1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, -1, 0, 0, 0, 0, -4]));
