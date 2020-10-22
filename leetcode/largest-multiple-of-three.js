/**
 * @param {number[]} digits
 * @return {string}
 */
const largestMultipleOfThree = function (digits) {
  let result = "";
  if (digits.length < 3) {
    return result;
  }

  digits.sort((a, b) => a - b);

  while (digits.length) {
    const digit = digits.pop();
    if (parseInt(result.concat(digit), 10) % 3 === 0) {
      result += digit;
    }
  }
  return result;
};

console.log(largestMultipleOfThree([8, 1, 9]));
