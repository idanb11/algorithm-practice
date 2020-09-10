/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function kLengthApart(nums, k) {
  const onesIndex = [];

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === 1) {
      onesIndex.push(index);
    }
  }

  for (let index = 0; index < onesIndex.length - 1; index++) {
    if (onesIndex[index + 1] - onesIndex[index] - 1 < k) {
      return false;
    }
  }

  return true;
}

console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2));

console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2));
console.log(kLengthApart([1, 1, 1, 1, 1], 0));
