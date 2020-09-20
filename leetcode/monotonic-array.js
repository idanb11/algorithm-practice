/**
 * @param {number[]} A
 * @return {boolean}
 */
const isMonotonic = function (A) {
  let isAscend;
  let current = A[0];

  for (let i = 1; i < A.length; i++) {
    if (current === A[i]) {
      continue;
    } else {
      if (isAscend === undefined) {
        isAscend = current < A[i];
      } else {
        if (isAscend === false && current < A[i]) {
          return false;
        } else if (isAscend === true && current > A[i]) {
          return false;
        }
      }
    }
    current = A[i];
  }

  return true;
};

console.log(isMonotonic([1, 2, 5, 3, 3]));
