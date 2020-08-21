function solution(P, C) {
  let counter = 0;
  let players = P;
  let courts = C;

  while (players >= 2 && courts > 0) {
    counter++;
    courts--;
    players -= 2;
  }

  return counter;
}

console.log(solution(5, 3));
console.log(solution(10, 3));
