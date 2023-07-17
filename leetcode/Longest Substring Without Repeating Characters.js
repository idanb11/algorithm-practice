/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  if (s.length === 0 || s.length === 1) {
    return s.length;
  }

  let maxLength = 1;
  let pointer1 = 0;
  let map = {};
  let currentLength = 1;

  while (pointer1 < s.length - 1) {
    let pointer2 = pointer1 + 1;
    map[s[pointer1]] = true;

    while (pointer2 < s.length) {
      if (!map[s[pointer2]]) {
        map[s[pointer2]] = true;
        currentLength++;
        pointer2++;
      } else {
        maxLength = Math.max(currentLength, maxLength);
        map = {};
        currentLength = 1;
        pointer1++;
        break;
      }
    }
  }
  return maxLength;
};

lengthOfLongestSubstring("abcabcbb");
