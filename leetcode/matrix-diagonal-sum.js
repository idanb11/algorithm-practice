/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = function (mat) {
  let sum = 0;
  const len = mat.length;

  if (mat.length === 1) {
    return mat[0][0];
  }

  for (let i = 0; i < len; i++) {
    sum += mat[i][i] + mat[i][len - i - 1];
  }

  if (len % 2 === 1) {
    let center = (len - 1) / 2;
    sum -= mat[center][center];
  }
  return sum;
};

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
