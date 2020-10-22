/**
 * @param {number[][]} pairs
 * @return {number}
 */

function findLongestChain(pairs) {
  pairs.sort((a, b) => a[1] - b[1]);
  console.log(pairs);

  let counter = 0;
  let lastEnd = Number.MIN_SAFE_INTEGER;

  for (let index = 0; index < pairs.length; index++) {
    const [start, end] = pairs[index];
    if (start > lastEnd) {
      console.log([start, end]);
      counter++;
      lastEnd = end;
    }
  }
  return counter;
}

findLongestChain([
  [8, 9],
  [8, 10],
  [-3, 7],
  [-9, 9],
  [8, 10],
  [1, 10],
  [-7, 3],
  [-3, 6],
  [9, 10],
  [-8, 0],
]);
