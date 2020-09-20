/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  if (s.length === 1) {
    return 1;
  }

  let maxLength = 0;
  let lastIndex = 0;
  const set = new Set();

  for (let index = 0; index < s.length; index++) {
    const element = s[index];

    if (set.has(element)) {
      maxLength = Math.max(maxLength, index - lastIndex);
      index = lastIndex + 1;
      lastIndex++;
      set.delete;
    } else {
      set.add(element);
    }
  }
  maxLength = Math.max(maxLength, s.length - lastIndex);

  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("pwwkew"));
