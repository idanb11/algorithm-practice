function solution(K, M, A) {
  let min = 0;
  let max = 0;
  let mid = 0;
  let i = 0;

  for (i = 0; i < A.length; i++) {
    max += A[i];
    min = Math.max(min, A[i]);
  }

  if (K === 1) {
    return max;
  } else if (K >= A.length) {
    return min;
  }

  while (min <= max) {
    const temp = mid;
    mid = parseInt((max + min) / 2);

    if (mid === temp) {
      break;
    }

    const blocks = neededBlocks(A, mid);

    if (blocks > K) {
      min = mid + 1;
    } else {
      max = mid;
    }
  }

  return max;
}

function neededBlocks(arr, maxValue) {
  let count = 1;
  let sum = arr[0];

  for (let j = 1; j < arr.length; j++) {
    if (sum + arr[j] > maxValue) {
      sum = arr[j];
      count++;
    } else {
      sum += arr[j];
    }
  }

  return count;
}

solution(3, 5, [2, 1, 5, 1, 2, 2, 2]);
