const assert = require("assert");

function solution(A) {
  A.sort();

  
}

function sliceArrayInMiddle(arr) {
  
  return 
}

function getMissingNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i + 2) {
      return arr[i] - 1;
    }
  }
}

assert.strictEqual(solution([2,3,1,5]), 4);



let max = len + 1; // 5
let total = A.reduce((x, y) => x + y); // 11
let missTotal = total - max; // 6
let actTotal = (len * (len + 1)) / 2; // 10
let o = actTotal - missTotal; // 4