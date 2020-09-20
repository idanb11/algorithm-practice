const assert = require("assert");

function findUniqueDeliveryId(deliveryIds) {
  const set = new Set();

  for (let index = 0; index < deliveryIds.length; index++) {
    const element = deliveryIds[index];

    if (set.has(element)) {
      set.delete(element);
    } else {
      set.add(element);
    }
  }
  for (const item of set) console.log(item);

  return [...set][0];
}

const actual = findUniqueDeliveryId([1,3,4,1,3,4,6,5,6]);
const expected = 5;
assert.strictEqual(actual, expected);
