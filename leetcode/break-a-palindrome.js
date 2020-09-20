/**
 * @param {string} palindrome
 * @return {string}
 */
const breakPalindrome = function (palindrome) {
  if (palindrome.length === 1) {
    return "";
  }

  const leftPart = Math.floor(palindrome.length / 2);
  let result = palindrome;

  for (let index = 0; index < leftPart; index++) {
    const element = palindrome[index];

    if (element !== "a") {
      result = result.split("");
      result[index] = "a";
      result = result.join("");
      return result;
    }
  }
  return result.slice(0, -1) + "b";
};

console.log(breakPalindrome("abccba"));
console.log(breakPalindrome("aa"));
