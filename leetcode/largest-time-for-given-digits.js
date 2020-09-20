/**
 * @param {number[]} arr
 * @return {string}
 */

const assert = require("assert");

const largestTimeFromDigits = function (arr) {
  const input = [...arr];
  let hours1;
  let hours2;
  let minutes1;

  input.sort();
  console.log(input);

  for (let index = 2; index >= 0; index--) {
    const i = input.indexOf(index);
    if (i >= 0) {
      hours1 = index;
      input.splice(i, 1);
      break;
    }
  }
  console.log(input);

  if (hours1 === undefined) {
    return "";
  }

  if (hours1 === 2) {
    for (let index = 3; index >= 0; index--) {
      const i = input.indexOf(index);
      if (i >= 0) {
        hours2 = index;
        input.splice(i, 1);
        break;
      }
    }
  } else if (hours1 === 1 || hours1 === 0) {
    console.log(input);
    hours2 = input.pop();
  }

  if (hours2 === undefined) {
    return "";
  }

  for (let index = 5; index >= 0; index--) {
    const i = input.indexOf(index);
    if (i >= 0) {
      minutes1 = index;
      input.splice(i, 1);
      break;
    }
  }

  if (minutes1 === undefined) {
    return "";
  }

  const minutes2 = input[0];

  return `${hours1}${hours2}:${minutes1}${minutes2}`;
};
// assert.strictEqual(largestTimeFromDigits([1, 2, 3, 4]), "23:41");
// assert.strictEqual(largestTimeFromDigits([5, 5, 5, 5]), "");
// assert.strictEqual(largestTimeFromDigits([0, 0, 0, 0]), "00:00");
// assert.strictEqual(largestTimeFromDigits([0, 0, 1, 0]), "10:00");
// assert.strictEqual(largestTimeFromDigits([0, 0, 3, 0]), "03:00");
// assert.strictEqual(largestTimeFromDigits([4, 2, 4, 4]), "");
assert.strictEqual(largestTimeFromDigits([2, 0, 6, 6]), "06:26");
