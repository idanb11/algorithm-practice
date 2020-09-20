/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = function (s, k) {
  const vowels = ["a", "e", "i", "o", "u"];
  let max = 0;

  if (s.length < k) {
    return 0;
  }

  for (let i = 0; i < s.length; i++) {
    let counter = 0;
    for (let j = 0; j < k; j++) {
      if (vowels.includes(s[i + j])) {
        counter++;
      }
    }
    max = Math.max(max, counter);
  }

  return max;
};

console.log(maxVowels("weallloveyou", 7));
