/**
 * @param {number[]} nums
 * @return {number}
 */
function dominantIndex(nums) {
  let largest = 0;
  let largestIndex = 0;
  let largest2nd = 0;

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    if (element > largest) {
      largest2nd = largest;
      largest = element;
      largestIndex = index;
    } else if (element > largest2nd) {
      largest2nd = element;
    }
  }

  return largest >= 2 * largest2nd ? largestIndex : -1;
}

console.log(dominantIndex([3, 6, 1, 0]));
console.log(dominantIndex([1, 6, 3, 0]));
console.log(dominantIndex([1, 2, 3, 4]));
