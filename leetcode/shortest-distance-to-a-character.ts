function shortestToChar(S, C) {
  const results = [];
  const input = S.split("");

  for (let index = 0; index < input.length; index++) {
    const element = input[index];
    if (element === C) {
      results.push(0);
    } else {
      const indexBefore = input.lastIndexOf(C, index);
      const indexAfter = input.indexOf(C, index + 1);

      if (indexAfter >= 0 && indexBefore >= 0) {
        results.push(Math.min(indexAfter - index, index - indexBefore));
      } else if (indexAfter >= 0 && indexBefore === -1) {
        results.push(indexAfter - index);
      } else {
        results.push(index - indexBefore);
      }
    }
  }

  return results;
}

console.log(shortestToChar("loveleetcode", "e"));
