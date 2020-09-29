/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
  const map = new Map();

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    if (map.has(element)) {
      const difference = index - map.get(element);
      if (difference <= k) {
        return true;
      }
      map.set(element, index);
    } else {
      map.set(element, index);
    }
  }
  return false;
};

console.log(containsNearbyDuplicate( [1,2,3,1], 3));
console.log(containsNearbyDuplicate( [1,2,3,1,2,3],  2));
console.log(containsNearbyDuplicate( [1,2,3,1], 3));
