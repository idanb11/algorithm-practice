const assert = require("assert").strict;

function getMaxProfit(stockPrices) {
  const len = stockPrices.length;
  if (len < 2) {
    return 0;
  }

  let index1 = 0;
  let index2 = 1;
  const profits = new Set();

  while (index1 < len - 1) {
    const profit = stockPrices[index2] - stockPrices[index1];
    profits.add(profit);

    if (index2 >= len - 1) {
      index1++;
      index2 = index1 + 1;
    } else {
      index2++;
    }
  }
  return Math.max(...Array.from(profits));
}

assert.strictEqual(getMaxProfit([10, 7, 5, 8, 11, 9]), 6);
assert.strictEqual(getMaxProfit([10, 8, 5, 1]), -2);
