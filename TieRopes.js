function solution(K, A) {
  const length = A.length;

  if (length < 2) {
    if (A[0] >= K) {
      return 1;
    } else {
      return 0;
    }
  }
  let counter = 0;
  let pointer1 = 0;
  let pointer2 = 1;
  let currentSum = A[pointer1];

  while (pointer2 <= length) {
    if (currentSum >= K) {
      counter++;
      pointer1 = pointer2;
      pointer2++;
      currentSum = A[pointer1];
    } else {
      currentSum += A[pointer2];
      pointer2++;
    }
  }

  return counter++;
}

console.log(solution(2, [1, 2, 3, 4, 1, 1, 3]));
