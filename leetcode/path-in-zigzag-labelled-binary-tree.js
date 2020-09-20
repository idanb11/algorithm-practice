/**
 * @param {number} label
 * @return {number[]}
 */
const pathInZigZagTree = function (label) {
  let index = Math.floor(Math.log2(label));
  const arr = [];
  while (label >= 1) {
    arr.push(label);
    let num = Math.pow(2, index + 1) - label;
    let pos = Math.ceil(num / 2);

    console.log(arr, num, pos, index);
    index--;
    label = Math.pow(2, index) + pos - 1;
  }
  return arr.reverse();
};


pathInZigZagTree(14)