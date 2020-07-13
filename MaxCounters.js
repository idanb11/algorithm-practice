function solution(N, A) {
  let highestNumber = 0;
  let arr = Array(N).fill(0);

  for (const item of A) {
    if (item >= 1 && item <= N) {
      arr[item - 1] += 1;
      highestNumber = arr[item - 1] > highestNumber ? arr[item - 1] : highestNumber;
    }

    if (item === N + 1) {
      arr = Array(N).fill(highestNumber);
    }
  }

  return arr;
}

console.log(solution(5, [3,4,4,6,1,4,4]));
console.log(solution(1, [2, 1, 1, 2, 1]));
console.log(solution(1, [1]));
