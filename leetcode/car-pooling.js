/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
function carPooling(trips, capacity) {
  let currentCapacity = capacity;
  let lastPosition = 0;

  trips.sort((trip1, trip2) => trip1[2] - trip2[1]);

  while (trips.length) {
    const trip = trips.shift();
    currentCapacity -= trip[0];
    if (!lastPosition) {
      lastPosition = trip[2];
    }

    if (trip[2] >= lastPosition) {
      lastPosition = trip[2];
      currentCapacity += trip[0];
    } else {
      if (currentCapacity < 0) {
        return false;
      }
    }
  }

  return true;
}

console.log(
  carPooling(
    [[2,1,5],[3,5,7]],
    2
  )
);
