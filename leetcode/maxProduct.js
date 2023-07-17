/**
 * Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
 * It is guaranteed that the answer will fit in a 32-bit integer.
 * A subarray is a contiguous subsequence of the array.
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function(nums) {
  let maxProduct = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let product = nums[i];
    if (product > maxProduct) {
      maxProduct = product;
    }
    for (let j = i + 1; j < nums.length; j++) {
      product *= nums[j];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }
  return maxProduct;
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([2, 3, -2, 4, -5]));
