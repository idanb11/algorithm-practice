/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findPairs = function (nums, k) {
  if (nums.length < 2) {
    return 0;
  }

  let pointer1 = 0;
  let pointer2 = 1;
  let counter = 0;
  const used = new Set();

  while (pointer1 < nums.length - 1) {
    const aboveNum = nums[pointer1] + k;
    const belowNum = nums[pointer1] - k;

    if (nums[pointer2] === aboveNum && !used.has(nums[pointer2])) {
      counter++;
      used.add(aboveNum);
    }

    if (nums[pointer2] === belowNum && !used.has(nums[pointer2])) {
      counter++;
      used.add(belowNum);
    }

    pointer2++;

    if (pointer2 === nums.length) {
      used.add(nums[pointer1]);
      pointer1++;
      pointer2 = pointer1 + 1;
    }
  }
  return counter;
};

// console.log(findPairs([3, 1, 4, 1, 5], 2));
// console.log(findPairs([1, 2, 3, 4, 5], 1));
// console.log(findPairs([1, 3, 1, 5, 4], 0));
console.log(findPairs([6, 3, 5, 7, 2, 3, 3, 8, 2, 4], 2));
