function maxDuffelBagValue(cakeTypes, capacity) {
  const maxValuesAtCapacities = new Array(capacity + 1).fill(0);

  for (let currentCapacity = 0; currentCapacity < maxValuesAtCapacities.length; currentCapacity++) {
    let maxValue = 0;
    cakeTypes.forEach(({weight, value}) => {
      if (weight <= currentCapacity) {
        const maxValueUsingCake = value + maxValuesAtCapacities[currentCapacity - weight];
        maxValue = Math.max(maxValueUsingCake, maxValue);
      }
    });
    maxValuesAtCapacities[currentCapacity] = maxValue;
  }

  console.log(maxValuesAtCapacities[capacity]);
}

const cakeTypes = [
  {weight: 7, value: 160},
  {weight: 3, value: 90},
  {weight: 2, value: 15},
];

const capacity = 20;

maxDuffelBagValue(cakeTypes, capacity);
