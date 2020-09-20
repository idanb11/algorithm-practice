/**
 * @param {number[][]} points
 * @return {number}
 */
const minCostConnectPoints = function (points) {
  const minimums = [];
  const sumOfDistances = [];

  if (!points || points.length == 1) {
    return 0;
  }

  // for (let i = 0; i < points.length; i++) {
  //   let minCost = Number.MAX_VALUE;
  //   const current = points[i];
  //   minimums[i] = {
  //     sum: 0,
  //     distances: [],
  //     min: undefined,
  //   };

  //   for (let j = i+1; j < points.length; j++) {
  //     if (i !== j) {
  //       const next = points[j];

  //       const distance = Math.abs(current[0] - next[0]) + Math.abs(current[1] - next[1]);

  //       if (distance < minCost) {
  //         minCost = distance;
  //       }
  //       minimums[i].distances.push(distance);
  //       minimums[i].sum += distance;
  //     }
  //   }
  //   minimums[i].min = minCost;
  // }
  // console.log(minimums);

  let list = [];
    for (let i = 0; i < points.length-1; i++) {
        for (let j = i+1; j < points.length; j++) {
            list.push([i, j, Math.abs(points[i][0]-points[j][0]) + Math.abs(points[i][1]-points[j][1])]);
        }
    }

    console.log(list);

  return minimums
    .sort((a, b) => a - b)
    .slice(1)
    .reduce((a, b) => a + b, 0);
};

// minCostConnectPoints([
//   [0, 0],
//   [1, 1],
//   [1, 0],
//   [-1, 1],
// ]);

// minCostConnectPoints([
//   [0, 0],
//   [2, 2],
//   [3, 10],
//   [5, 2],
//   [7, 0],
// ]);
// minCostConnectPoints([
//   [3, 12],
//   [-2, 5],
//   [-4, 1],
// ]);

minCostConnectPoints([
  [2, -3],
  [-17, -8],
  [13, 8],
  [-17, -15],
]);
