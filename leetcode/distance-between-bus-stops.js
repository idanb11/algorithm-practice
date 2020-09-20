/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
const distanceBetweenBusStops = function (distance, start, destination) {
  let clockwise = 0;
  let antiClockwise = 0;

  for (let index = Math.min(start, destination); index < Math.max(start, destination); index++) {
    clockwise += distance[index];
  }

  antiClockwise = distance.reduce((a, b) => a + b, 0) - clockwise;

  return Math.min(clockwise, antiClockwise);
};

console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 2));
console.log(distanceBetweenBusStops([7, 10, 1, 12, 11, 14, 5, 0], 7, 2));
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 2));
