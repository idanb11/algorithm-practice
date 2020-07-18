function maxArea(heights) {
  let max = 0;
  let i = 0;
  let j = heights.length - 1;

  while (i < j) {
    const currentArea = Math.min(heights[i], heights[j]) * (j - i);
    if (currentArea > max) {
      max = currentArea;
    }

    if (heights[j] >= heights[i]) {
      i++;
    } else {
      j--;
    }
  }
  return max;
}

assert.strictEqual(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
