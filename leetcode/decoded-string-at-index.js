/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
const decodeAtIndex = function (S, K) {
  const tape = [];
  let index = 0;
  const regex = RegExp("[2-9]");


  while (tape.join("").length < K ) {
    if (regex.test(S[index])) {
      tape.push( new Array(S[index] -1 ).fill(tape.join("")).join(""));
    } else {
      tape.push( S[index]);
    }
    index++;
  }

  return tape.join("")[K - 1];
};

// console.log(decodeAtIndex("leet2code3", 10));
console.log(decodeAtIndex("y959q969u3hb22odq595", 222280369));
