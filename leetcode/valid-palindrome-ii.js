/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function(s) {
  let isFound = false;
  let isDeleted = false;
  const half = Math.floor(s.length / 2);

  for (let i = 0; i < half; i++) {
    if (s[i] === s[s.length - 1]) {
      continue;
    }

    if (!isDeleted) {
      if (s[i + 1] === s[s.length - 1 - i] || s[i] === s[s.length - 2 - i]) {
        isDeleted = true;
      } else {
        isFound = false;
      }
    } else {
      isFound = false;
    }

    if (i === half || i + 1 === half) {
      isFound = true;
    }
  }
  return isFound;
};

console.log(validPalindrome("eedede"));
