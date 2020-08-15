function coinsChange(amount, denominations) {
  const options = [];

  if (Math.max(...denominations) > amount) {
    return 0;
  }

  denominations.sort();
  let sum = 0;

  for (let index = 0; index < denominations.length; index++) {
    const element = denominations[index];
    
    while(sum < amount) {
      sum += element;
    }

    if (sum === amount) {
      options.push([])
    }
  }

  return options.length;
}