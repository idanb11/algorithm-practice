/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
  let sum = 0;
  let counter = 0;
  coins.sort((a, b) => a - b);

  while (coins.length) {
    const coin = coins.pop();
    const divider = Math.floor((amount - sum) / coin);

    if (divider > 0) {
      counter += divider;
      sum += divider * coin;
    }

    if (sum === amount) {
      return counter;
    }
  }

  console.log(sum, counter);
  return -1;
};

// console.log(coinChange([1, 2, 5], 11));
// console.log(coinChange([1, 2, 5, 10], 18));
console.log(coinChange([186, 419, 83, 408], 6249));
