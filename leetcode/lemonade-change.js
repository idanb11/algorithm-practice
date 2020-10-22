/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function (bills) {
  if (bills.length === 0) {
    return true;
  }

  const memo = {
    5: 0,
    10: 0,
    20: 0,
  };

  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];

    if (bill === 5) {
      memo[5]++;
    } else if (bill === 10) {
      if (memo[5]) {
        memo[10]++;
        memo[5]--;
      } else {
        return false;
      }
    } else if (bill === 20) {
      let change = 0;

      while (change < 15 && memo[5]) {
        if (memo[10] && change === 0) {
          change += 10;
          memo[10]--;
        } else if (memo[5]) {
          change += 5;
          memo[5]--;
        }
      }

      if (change !== 15) {
        return false;
      }
    }
  }
  return true;
};

// console.log(lemonadeChange([5, 5, 5, 10, 20]));
// console.log(lemonadeChange([5, 5, 10]));
// console.log(lemonadeChange([10, 10]));
// console.log(lemonadeChange([5, 5, 10, 10, 20]));
console.log(lemonadeChange([5, 5, 5, 5, 10, 5, 10, 10, 10, 20]));
