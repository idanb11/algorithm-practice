/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
const videoStitching = function (clips, T) {
  let start = 0;
  let counter = 0;

  while (start < T) {
    let max = -1;
    let index = -1;

    for (let i = 0; i < clips.length; i++) {
      if (clips[i][0] <= start && clips[i][1] > start && max < clips[i][1]) {
        max = clips[i][1];
        index = i;
      }
    }

    if (index === -1) {
      return -1;
    }
    counter++;
    start = max;
  }
  return counter;
};

console.log(
  videoStitching(
    [
      [0, 2],
      [4, 6],
      [8, 10],
      [1, 9],
      [1, 5],
      [5, 9],
    ],
    10
  )
);
