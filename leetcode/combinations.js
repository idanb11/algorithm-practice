/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
  const results = [];

  for (let i = 0; i < n; i++) {
    const arr = [];
    for (let j = 0; j < k; j++) {
      arr.push(j);
    }
    results.push(arr);
  }

  console.log(results);
  return results;
};

combine(4, 2);
combine(1, 1);
