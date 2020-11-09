function hourglassSum(arr) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const currentSum = [
        arr[row][col],
        arr[row][col + 1],
        arr[row][col + 2],
        arr[row + 1][col + 1],
        arr[row + 2][col],
        arr[row + 2][col + 1],
        arr[row + 2][col + 2]
      ].reduce((acc, value) => acc + value, 0);

      if (currentSum > max) {
        max = currentSum;
      }
    }
  }

  return max;
}

console.log(
  hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 9, 2, -4, -4, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0]
  ])
);
