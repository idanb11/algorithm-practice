/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const minSwap = function (A, B) {
  const len = A.length;
  let counter = 0;

  if (len <= 1) {
    return counter;
  }

  let elemA = A[0];
  let elemB = B[0];

  for (let index = 1; index < len; index++) {
    if (A[index] <= elemA && B[index] > elemA) {
      counter++;
    } else if (B[index] <= elemB && A[index] > elemB) {
      counter++;
    }
    elemA = A[index];
    elemB = B[index];
  }

  return counter;
};

console.log(minSwap([1, 3, 5, 4], [1, 2, 3, 7]));
console.log(minSwap([3, 3, 8, 9, 10], [1, 7, 4, 6, 8]));
