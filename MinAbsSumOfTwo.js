function solution(A) {
  const length = A.length;
  let pointer1 = 0;
  let pointer2 = 0;
  let minimalAbsSum = Math.abs(A[pointer1] + A[pointer2]);

  if (length === 1) {
    return minimalAbsSum;
  }

  while (pointer1 < length - 1) {
    if (pointer2 < length - 1) {
      pointer2++;
    } else {
      pointer1++;
      pointer2 = pointer1;
    }

    const currentAbsSum = Math.abs(A[pointer1] + A[pointer2]);
    minimalAbsSum = Math.min(minimalAbsSum, currentAbsSum);
  }

  return minimalAbsSum;
}

console.log(solution([1, 4, -3]));
console.log(solution([-8, 4, 5, -10, 3]));
