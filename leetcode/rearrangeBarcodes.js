/**
 * @param {number[]} barcodes
 * @return {number[]}
 */

const rearrangeBarcodes = function (barcodes) {

  if (barcodes.length === 1) {
    return barcodes;
  }

  barcodes.sort();

  for (let index = 0; index < barcodes.length; index++) {
    const element1 = barcodes[index];
    const element2 = barcodes[index + 1];

    if (element1 && element2 && element2) {
      
    }
  }

  return result;
};

console.log(rearrangeBarcodes([1, 1, 1, 2, 2, 2]));

console.log(rearrangeBarcodes([[1, 1, 1, 1, 2, 2, 3, 3]]));
