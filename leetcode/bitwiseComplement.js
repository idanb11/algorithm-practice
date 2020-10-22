/**
 * @param {number} N
 * @return {number}
 */
const bitwiseComplement = function (N) {
  return parseInt(N.toString(2).split("").map((a) => (a === "0" ? "1" : "0")).join(""), 2);
};

console.log(bitwiseComplement(5));
console.log(bitwiseComplement(7));
console.log(bitwiseComplement(10));
