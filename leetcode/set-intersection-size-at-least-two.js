/**
 * @param {number[][]} intervals
 * @return {number}
 */
const intersectionSizeTwo = function (intervals) {
  // array1.filter(value => array2.includes(value))

  let currentIntersect = [Number.MIN_VALUE, Number.MAX_VALUE];

  for (let index = 0; index < intervals.length; index++) {
    const element = intervals[index];
    console.log(element, currentIntersect);

    currentIntersect[0] = Math.max(currentIntersect[0], element[0]);
    currentIntersect[1] = Math.min(currentIntersect[1], element[1]);

    // if (currentIntersect[1] - currentIntersect[0] === 0) {
    //   currentIntersect[1]++;
    // }

    console.log(currentIntersect);
  }

  // console.log(currentIntersect);
  return currentIntersect[1] - currentIntersect[0] + 2;
};

console.log(
  intersectionSizeTwo([
    [1, 3],
    [1, 4],
    [2, 5],
    [3, 5],
  ])
);

console.log(
  intersectionSizeTwo([[1, 2], [2, 3], [2, 4], [4, 5]])
);
