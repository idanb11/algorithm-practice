function cafeOrderChecker(takeOutOrders, dineInOrders, servedOrders) {
  let lastTakeOutOrderIndex = 0;
  let lastDineInOrderIndex = 0;

  for (let index = 0; index < servedOrders.length; index++) {
    const servedOrder = servedOrders[index];

    if (
      servedOrder === takeOutOrders[lastTakeOutOrderIndex] &&
      takeOutOrders.length &&
      lastTakeOutOrderIndex < takeOutOrders.length
    ) {
      lastTakeOutOrderIndex++;
    } else if (
      servedOrder === dineInOrders[lastDineInOrderIndex] &&
      dineInOrders.length &&
      lastDineInOrderIndex < dineInOrders.length
    ) {
      lastDineInOrderIndex++;
    } else {
      return false;
    }
  }
  return true;
}

console.log(cafeOrderChecker([17, 8, 24], [12, 19, 2], [17, 8, 12, 19, 24, 2]));
console.log(cafeOrderChecker([1, 3, 5], [2, 4, 6], [1, 2, 4, 6, 5, 3]));
