/**
 * @param {string} S
 * @return {string}
 */
const reorganizeString = function (S) {
  const map = {};
  let results = "";

  if (!S || S.length === 1) {
    return S;
  }

  for (let index = 0; index < S.length; index++) {
    const element = S[index];
    map[element] = (map[element] || 0) + 1;
  }

  const data = Object.entries(map).sort((a, b) => a[1] - b[1]);
  let entry1 = data.pop();
  let entry2 = data.pop();
  while ((entry1 && entry1[1]) || (entry2 && entry2[1])) {
    while ((entry1 && entry1[1] > 0) && (entry2 && entry2[1] > 0)) {
      results += entry1[0];
      entry1[1]--;
      results += entry2[0];
      entry2[1]--;
    }

    if (entry1 && entry1[1] === 0) {
      if (entry2[1] > 1) {
        return "";
      }
      entry1 = data.pop();
    }

    if (entry2 && entry2[1] === 0) {
      if (entry1[1] > 1) {
        return "";
      }
      entry2 = data.pop();
    }
  }

  return results;
};

// console.log(reorganizeString("aaaabbbccd"));
// console.log(reorganizeString("bbaaaabccd"));
console.log(reorganizeString("aaaabbbccdd"));
