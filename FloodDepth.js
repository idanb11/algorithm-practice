function solution(A) {
  const lakes = [];

  if (A.length < 3) {
    return 0;
  }
  let maxHeightPointer1 = 0;
  let maxHeightPointer2 = 1;

  while (maxHeightPointer2 < A.length) {
    if (A[maxHeightPointer1] > A[maxHeightPointer2]) {
      maxHeightPointer2++;
    } else {
      if (maxHeightPointer2 - maxHeightPointer1 > 1) {
        lakes.push([maxHeightPointer1, maxHeightPointer2]);
      }
      maxHeightPointer1 = maxHeightPointer2;
      maxHeightPointer2++;
    }
  }

  maxHeightPointer1 = A.length - 1;
  maxHeightPointer2 = A.length - 2;

  while (maxHeightPointer2 >= 0) {
    if (A[maxHeightPointer1] > A[maxHeightPointer2]) {
      maxHeightPointer2--;
    } else {
      if (maxHeightPointer1 - maxHeightPointer2 > 1) {
        lakes.push([maxHeightPointer2, maxHeightPointer1]);
      }
      maxHeightPointer1 = maxHeightPointer2;
      maxHeightPointer2--;
    }
  }

  return getMaxLakesDepth(lakes, A);
}

function getMaxLakesDepth(lakes, arr) {
  let maxDepth = 0;

  lakes.forEach(([start, end]) => {
    const minWall = Math.min(arr[start], arr[end]);
    const depth = minWall - Math.min(...arr.slice(start, end + 1));
    maxDepth = Math.max(maxDepth, depth);
  });

  return maxDepth;
}

console.log(solution([1, 3, 2, 1, 2, 1, 5, 3, 3, 4, 2]));
