function maxSubsetSum(arr) {
  const dp = new Array(arr.length - 1).fill(0);
  dp[0] = arr[0];
  dp[1] = Math.max(arr[1], arr[0]);

  for (let i = 2; i < arr.length; i++) {
    dp[i] = Math.max(arr[i], dp[i - 1], dp[i - 2] + arr[i]);
  }

  return dp[arr.length - 1];
}

console.log(maxSubsetSum([3, 5, -7, 8, 10]));
