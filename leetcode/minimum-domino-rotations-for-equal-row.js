/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const minDominoRotations = function (A, B) {
  let min = Number.MAX_SAFE_INTEGER;

  for (let number = 1; number <= 6; number++) {
    let counterA = 0;
    let counterB = 0;
    let isBreak = false;

    for (let index = 0; index < A.length; index++) {
      const elementA = A[index];
      const elementB = B[index];

      if (elementA !== number) {
        if (elementB === number) {
          counterA++;
        } else {
          counterA = undefined;
          isBreak = true;
        }
      }

      if (elementB !== number) {
        if (elementA === number) {
          counterB++;
        } else {
          counterB = undefined;
          isBreak = true;
        }
      }

      if (isBreak) {
        isBreak = false;
        break;
      }
    }

    if (counterA >= 0) {
      min = Math.min(min, counterA);
    }

    if (counterB >= 0) {
      min = Math.min(min, counterB);
    }
  }

  return min === Number.MAX_SAFE_INTEGER ? -1 : min;
};

// console.log(minDominoRotations([2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2]));

// console.log(minDominoRotations([3, 5, 1, 2, 3], [3, 6, 3, 3, 4]));

// console.log(minDominoRotations([5, 2, 6, 2, 3, 2], [2, 1, 2, 4, 2, 2]));

console.log(minDominoRotations([1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1]));
