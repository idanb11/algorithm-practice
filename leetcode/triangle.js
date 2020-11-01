/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function (triangle) {
  const rows = triangle.length;
  const dp = new Array(rows);

  if (!triangle) {
    return 0;
  }

  if (rows === 1) {
    return triangle[0];
  }

  dp[0] = triangle[0][0];
  let lastIndex = 0;

  for (let i = 1; i < rows; i++) {
    if (triangle[i][lastIndex] > triangle[i][lastIndex + 1]) {
      dp[i] = dp[i - 1] + triangle[i][lastIndex + 1];
      lastIndex = lastIndex + 1;
    } else {
      dp[i] = dp[i - 1] + triangle[i][lastIndex];
    }
  }

  console.log(dp);
  return dp[rows - 1];
};

console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]]));
