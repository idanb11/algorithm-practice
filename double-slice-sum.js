function solution(A) {
  let maxsum = 0;
  let max_end_at = Array(A.length);
  let max_start_at = Array(A.length);
  max_end_at[0] = max_start_at[A.length - 1] = max_end_at[
    A.length - 1
  ] = max_start_at[0] = 0;
  let { max } = Math;
  for (let i = 1; i < A.length - 1; i++) {
    max_end_at[i] = max(0, max_end_at[i - 1] + A[i]);
  }

  for (let n = A.length - 2; n > 0; n--) {
    max_start_at[n] = max(0, max_start_at[n + 1] + A[n]);
  }

  for (let m = 1; m < A.length - 1; m++) {
    maxsum = max(maxsum, max_end_at[m - 1] + max_start_at[m + 1]);
  }
  return maxsum;
}
