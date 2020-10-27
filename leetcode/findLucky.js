/**
 * @param {number[]} arr
 * @return {number}
 */
const findLucky = function (arr) {
  const count = {};

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] = (count[arr[i]] || 0) + 1;
  }

  const filtered = Object.entries(count).filter(([key, value]) => key === value.toString());

  if (filtered.length === 0) return -1;

  return Math.max(...filtered.map((item) => item[1]));
};

console.log(findLucky([19, 12, 11, 14, 18, 8, 6, 6, 13, 9, 8, 3, 10, 10, 1, 10, 5, 12, 13, 13, 9]));
