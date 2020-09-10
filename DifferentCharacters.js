function solution(S, K) {
  const charsCount = {};
  let numOfDifferentChars = 0;

  for (let index = 0; index < S.length; index++) {
    const element = S[index];

    if (charsCount[element]) {
      charsCount[element]++;
    } else {
      numOfDifferentChars++;
      charsCount[element] = 1;
    }
  }
}
