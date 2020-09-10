/**
 * @param {number} num
 * @return {number}
 */
function maximumSwap(num) {
  const numArray = num.toString().split("");
  if (numArray.length <= 1) {
    return num;
  }

  let maxIndex;
  let minIndex = 9;

  for (let digit = 9; digit >= 1; digit--) {
    const currentIndex = numArray.lastIndexOf(digit.toString());
    if (currentIndex > 0) {
      maxIndex = currentIndex;
      break;
    }
  }

  console.log(maxIndex);

  const maxDigit = numArray[maxIndex];

  console.log(maxDigit);

  for (let index = 0; index < maxIndex; index++) {
    if (numArray[index] < maxDigit) {
      [numArray[maxIndex], numArray[index]] = [numArray[index], numArray[maxIndex]];
      break;
    }
  }
  return parseInt(numArray.join(""));
}
console.log(maximumSwap(99901));
