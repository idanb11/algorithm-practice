function solution(X, A) {
  let holdValues = new Set();
  for (let i = 0; i < A.length; i++) {
    holdValues.add(A[i]);
    if (holdValues.size == X) return i;
  }

  return -1;
}

console.log(solution(5, [9, 7, 8, 5, 1, 3, 1, 4, 2, 3, 5, 4]));
