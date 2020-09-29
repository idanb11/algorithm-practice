/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = function (points) {
  const arrows = [points[0]];

  if (!points || points.length === 0) {
    return 0;
  }
  points.sort((a, b) => a[0] - b[0]);

  for (let index = 1; index < points.length; index++) {
    const [ballonStart, ballonEnd] = points[index];
    let didBurst = false;

    for (let j = 0; j < arrows.length; j++) {
      const [arrowStart, arrowEnd] = arrows[j];

      if (
        (ballonStart >= arrowStart && arrowEnd >= ballonStart) ||
        (ballonEnd >= arrowStart && arrowEnd >= ballonEnd)
      ) {
        arrows[j] = [Math.max(ballonStart, arrowStart), Math.min(ballonEnd, arrowEnd)];
        didBurst = true;
        break;
      }
    }

    if (!didBurst) {
      arrows.push(points[index]);
    }
  }
  return arrows.length;
};

console.log(
  findMinArrowShots([[1,9],[7,16],[2,5],[7,12],[9,11],[2,10],[9,16],[3,9],[1,3]])
);

// console.log(findMinArrowShots([]));
