/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = function (people, limit) {
  people.sort();
  let pointer1 = 0;
  let pointer2 = people.length - 1;

  while (pointer2 >= pointer1) {
    currentWeight = people[pointer2];
    if (currentWeight === limit) {
      counter++;
      pointer2--;
      currentWeight = 0;
    } else if (currentWeight + people[pointer1] === limit) {
      counter++;
      pointer2--;
      pointer1++;
      currentWeight = 0;
    } else if (currentWeight + people[pointer1] > limit) {
      counter++;
      pointer2--;
      currentWeight = 0;
    } else {
      if (pointer1 === pointer2 && currentWeight) {
        counter++;
        pointer1++;
      } else {
        currentWeight += currentWeight + people[pointer1];
        pointer1++;
      }
    }
  }

  return counter;
};

console.log(numRescueBoats([3, 5, 3, 4], 5));
console.log(numRescueBoats([3, 2, 2, 1], 3));
console.log(numRescueBoats([2, 1], 3));
console.log(numRescueBoats([4, 4, 4, 4], 4));
console.log(numRescueBoats([3, 8, 7, 1, 4], 9));
console.log(numRescueBoats([2, 4], 5));
