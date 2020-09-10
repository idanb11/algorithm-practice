/**
 * @param {string} S
 * @return {number}
 */
function minFlipsMonoIncr(S) {
  // const firstOneIndex = S.indexOf("1");
  // const slice = S.slice(firstOneIndex);
  // let counterOnes = 0;
  // let counterZeros = 0;

  // for (let index = 0; index < slice.length; index++) {
  //   if (slice[index] === "0") {
  //     counterZeros++;
  //   } else {
  //     if (slice.slice(index).indexOf("0") !== -1) {
  //       counterOnes++;
  //     }
  //   }
  // }

  // console.log(counterZeros, counterOnes);

  let flip1 = 0;
  let flip0 = 0;
  for (let i = 0; i < S.length; ++i) {
    if (S[i] === "0") {
      flip1 = Math.min(flip1 + 1, flip0);
    } else {
      flip0 = flip0 + 1;
    }
  }

  return Math.min(flip0, flip1);

  // return counterOnes > counterZeros ? counterZeros : counterOnes;
}

// console.log(minFlipsMonoIncr("00011000"));
// console.log(minFlipsMonoIncr("010110"));
// console.log(minFlipsMonoIncr("0101100011"));
console.log(minFlipsMonoIncr("10011111110010111011"));
                              01100000001101000100
