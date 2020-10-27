/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
  // const rowsMaxIndex = grid.length - 1;
  // const colsMaxIndex = grid[0].length - 1;
  // const memo = new Array(rowsMaxIndex);

  // return recurse(grid, rowsMaxIndex, colsMaxIndex, memo);

  const m = grid.length;
  const n = grid[0].length;

  // console.log([...Array(m)].map((e) => Array(n).fill(0)));
  // console.log(Array(m).fill(Array(n).fill(0)));
  const dp2 = [...Array(m)].map((e) => Array(n).fill(0));
  const dp = Array.from({length: m}, () => Array(n).fill(0));
  //  Array.from({length:10},()=> ({'hello':'goodbye'}))
  // .map(Array(n).fill(0));

  console.log(dp);

  dp[0][0] = grid[0][0];
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  console.log(dp);

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  console.log(dp);

  return dp[m - 1][n - 1];
};

// function recurse(grid, x, y, memo) {
//   if (x === y && x === 0) return grid[x][y];
//   if (x < 0 || y < 0) return Number.MAX_SAFE_INTEGER;

//   if (!memo[x]) {
//     memo[x] = [];
//   }

//   if (!memo[x][y]) {
//     memo[x][y] = grid[x][y] + Math.min(recurse(grid, x - 1, y, memo), recurse(grid, x, y - 1, memo));
//   }

//   return memo[x][y];
// }

console.log(
  minPathSum([
    [7, 4, 8, 7, 9, 3, 7, 5, 0],
    [1, 8, 2, 2, 7, 1, 4, 5, 7],
    [4, 6, 4, 7, 7, 4, 8, 2, 1],
    [1, 9, 6, 9, 8, 2, 9, 7, 2],
    [5, 5, 7, 5, 8, 7, 9, 1, 4],
    [0, 7, 9, 9, 1, 5, 3, 9, 4],
  ])
);
