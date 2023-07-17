/**
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function(s, p) {
  const pLength = p.length;
  let result = 0;
  for (let i = 0; i <= s.length - p.length; i++) {
    const sSlice = s.slice(i, pLength + i);
    if (sSlice.split('').sort().join('') === p.split('').sort().join('')) {
      result++;
    }
  }
  return result;
};

console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));
