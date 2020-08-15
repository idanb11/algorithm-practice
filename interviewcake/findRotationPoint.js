function findRotationPoint(arr) {
  let guessValue = arr[0];
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (startIndex < endIndex) {
    const guessIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
    guessValue = arr[guessIndex];

    if (arr[guessIndex] > guessValue) {
      endIndex = guessIndex;
    } else {
      startIndex = guessIndex;
    }

    if (startIndex + 1 === endIndex) {
      // Between floor and ceiling is where we flipped to the beginning
      // so ceiling is alphabetically first
      break;
    }
  }

  console.log(arr[endIndex]);
  return guessValue;
}

// ['k', 'v', 'a', 'b', 'c', 'd', 'e', 'g', 'i']

findRotationPoint([
  "ptolemaic",
  "retrograde",
  "supplant",
  "undulate",
  "xenoepist",
  "asymptote",
  "babka",
  "banoffee",
  "engender",
  "karpatka",
  "othellolagkage",
]);
