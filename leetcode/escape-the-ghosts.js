/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
const escapeGhosts = function (ghosts, target) {
  const packmanSteps = Math.abs(target[0]) + Math.abs(target[1]);

  for (let index = 0; index < ghosts.length; index++) {
    const element = ghosts[index];
    const stepsToTarget = Math.abs(element[0] - target[0]) + Math.abs(element[1] - target[1]);
    if (packmanSteps >= stepsToTarget) {
      return false;
    }
  }
  return true;
};

console.log(
  escapeGhosts(
    [
      [1, 9],
      [2, -5],
      [3, 8],
      [9, 8],
      [-1, 3],
    ],
    [8, -10]
  )
);
