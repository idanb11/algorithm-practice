const { log } = require("console");

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
  const target = {};
  const needed = {};

  for (const char of s1) {
    target[char] = (target[char] || 0) + 1;
    needed[char] = 0;
  }

  let left = 0;
  let isValid = false;
  const neededChars = Object.values(target).reduce((x, y) => x + y, 0);

  while (left < s2.length) {
    let count = 0;
    let currentChar = s2[left];
    while (
      currentChar in target &&
      needed[currentChar] <= target[currentChar]
    ) {
      count++;
      left++;
      needed[currentChar]++;
      if (count === neededChars) {
        isValid = true;
        break;
      }
      currentChar = s2[left];
    }

    if (isValid) {
      break;
    } else {
      left++;
    }
  }
  return isValid;
};

log(checkInclusion("abc", "bbbca"));
