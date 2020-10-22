/**
 * @param {string} p
 * @return {number}
 */
const findSubstringInWraproundString = function (p) {
  const array = new Array(26).fill(0);
  const firstLetter = 97;
  const lastLetter = 122;

  for (const letter of p.split("")) {
    array[letter.charCodeAt() - firstLetter]++;
  }

  console.log(array.concat(array));
};

console.log(findSubstringInWraproundString("zab"));
