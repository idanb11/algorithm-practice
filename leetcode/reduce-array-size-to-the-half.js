/**
 * @param {number[]} arr
 * @return {number}
 */
function minSetSize(arr) {
  const intCounter = {};
  let index;
  arr.forEach((item) => (intCounter[item] = intCounter[item] ? intCounter[item] + 1 : 1));
  const minLength = arr.length / 2;
  const sortedArr = Object.entries(intCounter).sort((a, b) => b[1] - a[1]);

  let currentSum = 0;
  for (index = 0; index < minLength; index++) {
    currentSum += sortedArr[index][1];
    if (currentSum >= minLength) {
      return index + 1;
    }
  }

  return index + 1;
}

minSetSize([1,2,3,4,5,6,7,8,9,10]);
