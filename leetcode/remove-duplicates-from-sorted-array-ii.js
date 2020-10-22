/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let lastItem;
  let counter = 1;

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    if (element === lastItem) {
      counter++;

      if (counter > 2) {
        nums[index - 1] = element;
        index++;

      }
    } else {
      counter = 1;
    }
    lastItem = element;
  }
  console.log(nums);
  return nums.length;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
