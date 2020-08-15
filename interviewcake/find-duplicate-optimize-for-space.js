function findDuplicate(params) {
  params.sort();

  let floorIndex = -1;
  let ceilingIndex = params.length;

  while (floorIndex + 1 < ceilingIndex) {
    const distance = ceilingIndex - floorIndex;
    const halfDistance = Math.floor(distance / 2);
    const guessIndex = floorIndex + halfDistance;

    const guessValue = params[guessIndex];

    if (guessValue === target) {
      return true;
    }

    if (guessValue > target) {

      // Target is to the left, so move ceiling to the left
      ceilingIndex = guessIndex;
    } else {

      // Target is to the right, so move floor to the right
      floorIndex = guessIndex;
    }
  }

  return false;


}

const params = [1, 2, 3, 4, 1, 5, 6, 1, 5];

console.log(findDuplicate(params));
