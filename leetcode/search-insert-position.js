/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  if (!nums || nums.length === 0) {
    return null;
  }

  let index = 0;

  while (index < nums.length) {
    if (target === nums[index]) {
      return index;
    }

    if (target < nums[index]) {
      return index;
    }

    index++;
  }

  return index;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));
