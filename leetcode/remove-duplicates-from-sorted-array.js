/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let counter = 0;
  const len = nums.length;
  let index = 0;

  while (index < nums.length - 1) {
    console.log(nums);
    if (nums[index] === nums[index + 1]) {
      nums.splice(index, 1);
      counter++;
    } else {
      index++;
    }
  }

  return len - counter;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 1, 2]));
