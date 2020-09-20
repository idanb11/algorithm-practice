/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function (arr) {
  const count = {};
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    count[element] = (count[element] || 0) + 1;
  }

  const values = Object.values(count);

  const set = new Set(values);

  return set.size === values.length;
};

console.log(uniqueOccurrences([1,2,2,1,1,3]));
