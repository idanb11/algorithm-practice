function minimumSwaps(arr) {
  if (!arr || arr.length <= 1) {
    return 0;
  }

  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element === i + 1) {
      continue;
    } else {
      const swapIndex = arr.indexOf(i + 1);
      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
      counter++;
    }
  }
  return counter;
}

console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]));
