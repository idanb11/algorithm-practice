/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  const dp = new Array(n).fill(0);

  dp[1] = 1;
  dp[2] = 2;

  for (let index = 3; index <= n; index++) {
    dp[index] = dp[index - 1] + dp[index - 2];
  }

  return dp[n];
};

console.log(climbStairs(5));
