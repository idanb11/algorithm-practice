function solution(arrayOfInts) {
  const three = [arrayOfInts[0], arrayOfInts[1], arrayOfInts[2]];

  let maxProduct = productOfArray(three);

  for (let index = 3; index < arrayOfInts.length; index++) {
    const element = arrayOfInts[index];
    const minInt = Math.min(...three);
    const minIntIndex = three.indexOf(minInt);

    if (element > minInt) {
      three[minIntIndex] = element;
      maxProduct = productOfArray(three);
    }
  }
  console.log(maxProduct);
}

function productOfArray(arr) {
  return arr.reduce((prev, curr) => prev * curr, 1);
}

console.log(solution([-10, -10, 1, 3, 2]));
