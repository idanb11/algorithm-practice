/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
function smallestStringWithSwaps(s, pairs) {
  const arr = s.split("");
  let isChanged = true;

  while (isChanged) {
    isChanged = false;
    for (let index = 0; index < pairs.length; index++) {
      const [x, y] = pairs[index];
      if (arr[y] < arr[x]) {
        [arr[y], arr[x]] = [arr[x], arr[y]];
        isChanged = true;
        console.log(arr);
      }
    }

  }
  return arr.join('');
}

console.log(
  smallestStringWithSwaps("dcab", [
    [0, 3],
    [1, 2],
    [0, 2],
  ])
);
