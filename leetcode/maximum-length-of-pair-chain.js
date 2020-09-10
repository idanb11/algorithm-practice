/**
 * @param {number[][]} pairs
 * @return {number}
 */

function findLongestChain(pairs) {
  pairs.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  console.log(pairs);

  let counter = 0;
  let lastEnd;

  for (let index = 0; index < pairs.length; index++) {
    const [start, end] = pairs[index];
    if (!lastEnd || start > lastEnd) {
      console.log([start, end]);
      counter++;
      lastEnd = end;
    }
  }
  return counter;
}

findLongestChain([
  [-6, 9],
  [1, 6],
  [8, 10],
  [-1, 4],
  [-6, -2],
  [-9, 8],
  [-5, 3],
  [0, 3],
]);
