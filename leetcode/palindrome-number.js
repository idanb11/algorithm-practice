/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  // const len = x.length;
  let multiplier = 10;
  // let pointer1 = 0;
  // let pointer2 = len - 1;

  while (x > multiplier) {
    const left = Math.floor(x / multiplier);
    const right = x % multiplier;

    console.log(left, right);

    if (left !== right) {
      return false;
    }

    // pointer1++;
    // pointer2--;
    multiplier *= 10;
  }

  return true;
};

console.log(isPalindrome(131));
