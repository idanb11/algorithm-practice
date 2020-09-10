/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
function rearrangeBarcodes(barcodes) {
  // const results = [...barcodes];
  // let pointer = 0;

  if (barcodes.length < 1) {
    return barcodes;
  }

  // results.sort();

  // while (pointer < results.length - 1) {
  //   if (results[pointer] !== results[pointer + 1]) {
  //     pointer++;
  //   } else {
  //     const barcodeToAdd = results.pop();
  //     if (barcodeToAdd === results[pointer]) {
  //       let pointOfInsert = 0;
  //       for (let index = 0; index < results.length; index++) {
  //         if (results[index] !== barcodeToAdd && results[index + 1] !== barcodeToAdd) {
  //           pointOfInsert = index;
  //           break;
  //         }
  //       }
  //       results.splice(pointOfInsert + 1, 0, barcodeToAdd);
  //     } else {
  //       results.splice(pointer + 1, 0, barcodeToAdd);
  //       pointer += 2;
  //     }
  //   }
  // }
  // console.log(results);
  // return results;

  const itemCounters = {};
  const results = [];

  barcodes.forEach((barcode) => (itemCounters[barcode] = itemCounters[barcode] ? itemCounters[barcode] + 1 : 1));

  const sorted = Object.entries(itemCounters).sort((a, b) => b[1] - a[1]);

  while (sorted[0][1]) {
    const barcode = sorted[0][0];
    sorted[0][1]--;
    results.push(barcode);

    if (sorted[1] && sorted[1][1]) {
      const barcode2 = sorted[1][0];
      sorted[1][1]--;
      results.push(barcode2);

      if (sorted[1][1] === 0) {
        sorted.splice(1, 1);
      }
    }

    // if (sorted[2] && sorted[2][1]) {
    //   const barcode3 = sorted[2][0];
    //   sorted[2][1]--;
    //   results.push(barcode3);

    //   if (sorted[2][1] === 0) {
    //     sorted.splice(2, 1);
    //   }
    // }
  }

  console.log(results);
  return results;
}

rearrangeBarcodes([2, 2, 2, 1, 5]);
rearrangeBarcodes([1, 1, 1, 2, 2, 2]);
rearrangeBarcodes([1, 1, 1, 1, 2, 2, 3, 3]);
rearrangeBarcodes([7, 7, 7, 8, 5, 7, 5, 5, 5, 8]);
