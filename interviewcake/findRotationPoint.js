function findRotationPoint(arr) {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  let guessValue = arr[0];
  while (startIndex + 1 < endIndex) {
    const guessIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (arr[guessIndex] > guessValue) {
      endIndex = guessIndex;
    } else {
      startIndex = guessIndex;
    }
    guessValue = arr[guessIndex];
  }

  console.log(guessValue);
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
