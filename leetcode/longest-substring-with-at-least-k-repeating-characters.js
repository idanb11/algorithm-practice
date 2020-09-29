/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const longestSubstring = function (s, k) {
  const map = new Map();

  for (let index = 0; index < s.length; index++) {
    const element = s[index];

    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }

  const allowedLetters = [];

  for (const [key, value] of map) {
    if (value >= k) {
      allowedLetters.push(key);
    }
  }

  let maxLength = 0;
  let counter = 0;
  for (let index = 0; index < s.length; index++) {
    const element = s[index];

    if (allowedLetters.includes(element)) {
      counter++;
    } else {
      if (counter > 0) {
        maxLength = Math.max(maxLength, counter);
        counter = 0;
      }
    }
  }

  return Math.max(maxLength, counter);
};

console.log(longestSubstring("aaabb", 3));
console.log(longestSubstring("ababbc", 2));
console.log(longestSubstring("aaabbb", 3));
console.log(longestSubstring("ababacb", 3));
