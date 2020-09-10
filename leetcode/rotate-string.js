/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
function rotateString(A, B) {
  let startingIndex = B.indexOf(A[0]);

  if (A.length !== B.length) {
    return false;
  }

  for (let index = 0; index < B.length; index++) {
    if (A[index] === B[startingIndex]) {
      startingIndex++;
    } else {
      return false;
    }

    if (startingIndex >= A.length) {
      startingIndex = 0;
    }
  }
  return true;
}

// console.log(rotateString("abcde", "cdeab"));
// console.log(rotateString("abcde", "abced"));
console.log(rotateString("bbbacddceeb", "ceebbbbacdd"));

// 'abcde', B = 'abced'
