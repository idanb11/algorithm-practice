/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const string = x.toString().split("").reverse().join("");

  if (string.endsWith("-")) {
    const value = parseInt("-" + string.slice(0, string.length - 1), 10);
    return Math.pow(-2, 31) > value ? 0 : value;
  }
  return Math.pow(2, 32) - 1 < parseInt(string, 10) ? 0 : parseInt(string, 10);
};

console.log(reverse(1563847412));
