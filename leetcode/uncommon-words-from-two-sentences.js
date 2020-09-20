/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
const uncommonFromSentences = function (A, B) {
  const map = new Map();

  const wordsA = A.split(" ");
  const wordsB = B.split(" ");

  for (let index = 0; index < Math.max(wordsA.length, wordsB.length); index++) {
    const elementA = wordsA[index];
    const elementB = wordsB[index];

    if (elementA) {
      map.set(elementA, (map.get(elementA) || 0) + 1);
    }

    if (elementB) {
      map.set(elementB, (map.get(elementB) || 0) + 1);
    }
  }

  for (const [key, val] of map) {
    if (val > 1) {
      map.delete(key);
    }
  }
  return [...map.keys()];
};

console.log(uncommonFromSentences("s z z z s", "s z ejt"));
