/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
const minSubarray = function (nums, p) {
  for (let index = 0; index < nums.length - 1; index++) {
    const sum = nums.reduce((a, b) => a + b);
    const reminder = sum % p;
    if (reminder === 0) {
      return index;
    } else {
      if (nums.some((num) => num % p === reminder)) {
        return index + 1;
      }
    }
  }

  return -1;
};

console.log(minSubarray([3, 1, 4, 2], 6));
console.log(minSubarray([6, 3, 5, 2], 9));
console.log(minSubarray([1, 2, 3], 3));
console.log(minSubarray([1, 2, 3], 7));
