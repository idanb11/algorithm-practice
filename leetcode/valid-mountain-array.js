/**
 * @param {number[]} A
 * @return {boolean}
 */
const validMountainArray = function (A) {
  let isPeak = false;

  if (A.length < 3) {
    return false;
  }

  for (let index = 0; index < A.length - 1; index++) {
    const item1 = A[index];
    const item2 = A[index + 1];
    const item3 = A[index + 2];

    if (item1 < item2 && item2 > item3) {
      if (isPeak) {
        return false;
      }
      isPeak = true;
      index++;
      continue;
    }

    if (!isPeak) {
      if (item1 >= item2) {
        return false;
      }
    } else {
      if (item1 <= item2) {
        return false;
      }
    }
  }
  return isPeak ? true : false;
};

// console.log(validMountainArray([3, 5, 5]));
// console.log(validMountainArray([0, 3, 2, 1]));
console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
