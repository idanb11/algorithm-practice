function climbingLeaderboard(scores, alice) {
  const set = new Set(scores);
  const results = [];

  scores = [...set];

  for (let i = 0; i < alice.length; i++) {
    const score = alice[i];
    const scoreIndex = scores.indexOf(score);
    if (scoreIndex > -1) {
      results.push(scoreIndex + 1);
    } else {
      let lastIndex= 0;
      for (let j = lastIndex; j < scores.length; j++) {
        if (score > scores[j]) {
          scores.splice(j, 0, score);
          results.push(j + 1);
          lastIndex = j + 1;
          break;
        } else if (score < scores[j] && j === scores.length - 1) {
          scores.push(score);
          results.push(scores.length);
          lastIndex = scores.length - 1;
        }
      }
    }
  }

  console.log(results);

  return results;
}

climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]);
