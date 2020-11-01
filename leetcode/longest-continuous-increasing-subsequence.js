const assert = require("assert");

/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = function (nums) {
  if (!nums || nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return 1;
  }

  let max = 0;
  let counter = 0;
  let pointer1 = 0;
  let pointer2 = 1;

  while (pointer2 < nums.length) {
    if (nums[pointer2] > nums[pointer1]) {
      counter++;
      pointer1++;
      pointer2++;
    } else {
      max = Math.max(max, counter + 1);
      counter = 0;
      pointer1 = pointer2;
      pointer2 = pointer1 + 1;
    }
  }
  max = Math.max(max, counter + 1);

  return max;
};

assert.strictEqual(findLengthOfLCIS([1, 3, 5, 4, 7]), 3);
