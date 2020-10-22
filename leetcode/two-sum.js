/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  // nums.sort((a, b) => a - b);

  // for (let index = 0; index < nums.length; index++) {
  //   const element = nums[index];
  //   const reminder = nums.indexOf(target - element);

  //   if (reminder !== index && reminder >= 0) {
  //     return [index, reminder];
  //   }
  // }

  let map = new Map();
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let res = target - nums[i];
    if (map.get(res) != null) {
      return [i, map.get(res)];
    } else {
      map.set(nums[i], i);
    }
  }
};

console.log(twoSum([4, 7, 15, 2], 9));
console.log(twoSum([3, 2, 4], 6));
