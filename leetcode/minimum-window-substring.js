const { log } = require("console");

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  const charsCount = {};
  let minLength = Infinity;
  let minString = "";

  for (let i = 0; i < t.length; i++) {
    charsCount[t[i]] = (charsCount[t[i]] || 0) + 1;
  }

  // log(charsCount);
  let left = 0;

  while (left < s.length) {
    const currentCount = { ...charsCount };
    let right = left;

    while (right < s.length) {
      let visitedChars = t.length;
      if (currentCount[s[right]] && currentCount[s[right]] > 0) {
        currentCount[s[right]]--;
        visitedChars--;
      }
      right++;

      if (visitedChars === 0) {
        if (right - left < minLength) {
          minLength = right - left;
          minString = s.slice(left, right);
        }
        break;
      }
    }
    left++;
  }

  return minLength === Infinity ? "" : minString;
};

log(minWindow("ADOBECODEBANC", "ABC"));
