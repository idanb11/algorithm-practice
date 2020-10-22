/**
 * @param {number[][]} intervals
 * @return {number}
 */
const removeCoveredIntervals = function (intervals) {
  if (intervals.length === 1) {
    return 1;
  }

  intervals.sort((a, b) => b[1] - b[0] - (a[1] - a[0]));

  for (let i = 0; i < intervals.length; i++) {
    const element1 = intervals[i];
    let j = i + 1;

    while (j < intervals.length) {
      const element2 = intervals[j];
      if (element1[0] <= element2[0] && element1[1] >= element2[1]) {
        intervals.splice(j, 1);
      } else {
        j++;
      }
    }
  }

  return intervals.length;
};

console.log(
  removeCoveredIntervals([
    [1, 4],
    [3, 6],
    [2, 8],
  ])
);
// console.log(
//   removeCoveredIntervals([
//     [3, 10],
//     [4, 10],
//     [5, 11],
//   ])
// );
// console.log(
//   removeCoveredIntervals([
//     [0, 10],
//     [5, 12],
//   ])
// );
