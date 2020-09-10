/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
  if (nums.length <= 1) {
    return nums.length;
  }
  const results = [];

  for (let index = 0; index < nums.length - 1; index++) {
    if (nums[index + 1] > nums[index]) {
      results.push("+");
    } else {
      results.push("-");
    }
  }

  console.log(results);

  let counter = 0;
  for (let index = 0; index < results.length; index++) {
    if (results[index] === "+") {
      counter++;
    } else {
      counter = 0;
    }
  }

  return counter + 1;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]));
