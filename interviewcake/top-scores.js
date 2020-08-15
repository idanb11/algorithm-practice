function topScores(unsortedScores, highestPossibleScore) {
  const sortedCountScores = new Array(highestPossibleScore + 1);
  sortedCountScores.fill(0);
  const sortedScores = [];

  for (let index = 0; index < unsortedScores.length; index++) {
    const element = unsortedScores[index];
    sortedCountScores[element] += 1;
  }

  let lastPosition = 0;
  for (let index = sortedCountScores.length -1; index >= 0; index--) {
    const count = sortedCountScores[index];

    sortedScores.length += count;
    sortedScores.fill(index, lastPosition, lastPosition + count);
    lastPosition += count;
  }

  console.log(sortedScores);
  console.log(sortedScores.length);
}

topScores([100, 99, 99 , 37, 89, 41, 65, 91, 53, 0], 100);
