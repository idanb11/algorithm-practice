//   const myArray = [3, 4, 6, 10, 11, 15];
// const alicesArray = [1, 5, 8, 12, 14, 19];

// console.log(mergeArrays(myArray, alicesArray));

// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]


const assert = require("assert").strict;

function mergeArrays(arry1, arry2) {
  const result = [];
  const maxLen = Math.max(arry1.length, arry2.length);

  const minOrder = 0

  for (let index = 0; index < maxLen; index++) {
    const element1 = arry1[index];
    const element2 = arry2[index];

    

    
  }

  // const set = new Set(arry1.concat(arry2));
  // return Array.from(set).sort();


}

assert.strictEqual(mergeArrays([3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19]), [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]);
