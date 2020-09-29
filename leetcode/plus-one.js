/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  const results = [];
  digits[digits.length - 1] += 1;
  let reminder = 0;

  for (let index = digits.length - 1; index >= 0; index--) {
    let element = digits[index];

    if (reminder) {
      element += reminder;
      reminder = 0;
    }

    if (element === 10) {
      results.push(0);
      reminder++;
    } else {
      results.push(element);
    }
  }

  if (reminder) {
    results.push(1);
  }
  return results.reverse();
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
