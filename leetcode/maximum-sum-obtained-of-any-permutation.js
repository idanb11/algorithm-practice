/**
 * @param {number[]} nums
 * @param {number[][]} requests
 * @return {number}
 */
const maxSumRangeQuery = function (nums, requests) {
  const freq = new Array(nums.length).fill(0);
  const sortFn = (a, b) => a - b;
  nums.sort(sortFn);
  let max = 0;
  const len = nums.length;

  for (let index = 0; index < requests.length; index++) {
    const [start, end] = requests[index];

    for (let j = start; j <= end; j++) {
      freq[j]++;
    }
  }

  freq.sort(sortFn);

  while (freq.length) {
    max += nums.pop() * freq.pop();
  }

  return max % (Math.pow(10, 9) + 7);
};

maxSumRangeQuery(
  [1, 2, 3, 4, 5],
  [
    [1, 3],
    [0, 1],
  ]
);

maxSumRangeQuery([1, 2, 3, 4, 5, 6], [[0, 1]]);
maxSumRangeQuery(
  [1, 2, 3, 4, 5, 10],
  [
    [0, 2],
    [1, 3],
    [1, 1],
  ]
);
