/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function canPartitionKSubsets(nums, k) {
  const max = Math.max(...nums);
  const sums = new Array(k).fill(0);

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    if (element <= max) {
      let isAdded = false;
      for (let index2 = 0; index2 < sums.length && !isAdded; index2++) {
        if (sums[index2] + element <= max) {
          sums[index2] += element;
          isAdded = true;
        }
      }
    } else {
      return false;
    }
  }

  console.log(sums);
  return k * max === sums.reduce((a, b) => a + b);
}

console.log(canPartitionKSubsets([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5));
