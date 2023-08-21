/**
 * @param {number[][]} edges
 * @return {number}
 */
const findCenter = function (edges) {
  const map = {};
  let center = null;
  for (let i = 0; i < edges.length; i++) {
    const currentEdge = edges[i];
    currentEdge.forEach((x) => {
      map[x] = (map[x] || 0) + 1;
      if (map[x] === edges.length - 1) {
        console.log("found");
        center = x;
      }

      console.log(map);
    });
  }
  return center;
};

console.log(
  findCenter([
    [1, 3],
    [2, 3],
  ]),
);
