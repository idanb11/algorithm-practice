/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const element = prices[i];

    if (element < minPrice) {
      minPrice = element;
    } else if (element - minPrice > maxProfit) {
      maxProfit = element - minPrice;
    }
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
