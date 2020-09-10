function solution(A, B, F) {
  /* const totalDevelopers = A.length;
  let frontEnds = F;
  let backEnds = totalDevelopers - F;
  let maxContribution = 0;

  if (F === 0) {
    return B.reduce((a, b) => a + b);
  }

  if (F === A.length) {
    return A.reduce((a, b) => a + b);
  }

  while (frontEnds + backEnds > 0) {
    let selectedIndex;
    const maxA = Math.max(...A);
    const maxB = Math.max(...B);

    if (maxA > maxB && frontEnds > 0) {
      maxContribution += maxA;
      frontEnds--;
      selectedIndex = A.indexOf(maxA);
    } else if (maxB > maxA && backEnds > 0) {
      maxContribution += maxB;
      backEnds--;
      selectedIndex = B.indexOf(maxB);
    } else if (maxB === maxA) {
      maxContribution += maxB;
      backEnds--;
      selectedIndex = B.indexOf(maxB);
    } else {
      if (frontEnds > 0) {
        maxContribution += maxA;
        frontEnds--;
        selectedIndex = A.indexOf(maxA);
      } else {
        maxContribution += maxB;
        backEnds--;
        selectedIndex = B.indexOf(maxB);
      }
    }

    A.splice(selectedIndex, 1);
    B.splice(selectedIndex, 1);
  }

  return maxContribution; */

  // def solution(A, B, F):
  // C=[] #There will be two dimmensioned array where is every element [productivity in A team, difference in productivity]
  // team1=team2=0
  // for x in range(0,len(A)): C.append([A[x]-B[x],A[x]]) #filling C
  // C.sort(reverse=True)
  // for x in range(0,F): team1 += C[x][1] #counting productiviy in team1
  // for x in range(F,len(A)): team2 += C[x][1]-C[x][0] #counting productiviy in team2
  // return (team1+team2)

  const C = [];
  let team1 = 0;
  let team2 = 0;

  for (let x = 0; x < A.length; x++) {
    C.push([A[x] - B[x], A[x]]);
  }

  console.log(A);
  console.log(B);
  console.log(C);

  C.sort((a, b) => b[0] - a[0]);
  console.log(C);

  for (let index = 0; index < F; index++) {
    team1 += C[index][1];
  }

  for (let index = F; index < A.length; index++) {
    team2 += C[index][1] - C[index][0];
  }

  return team1 + team2;
}

console.log(solution([4, 2, 1], [2, 5, 3], 2));

console.log(solution([7, 1, 4, 4], [5, 3, 4, 3], 2));

console.log(solution([5, 5, 5], [5, 5, 5], 1));

