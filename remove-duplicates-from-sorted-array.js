const assert = require("assert").strict;

function removeDuplicates(nums) {
  if (nums.length === 0 || nums.length === 1) {
    return nums.length;
  }

  let i = 0;
  let j = 1;

  while (j < nums.length) {
    if (nums[j] > nums[i]) {
      i++;
      j++;
    } else if (nums[i] === nums[j]) {
      nums.splice(j, 1);
    }
  }
  return nums.length;
}

assert.strictEqual(removeDuplicates([1, 1, 2]), 2);
assert.strictEqual(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5);
