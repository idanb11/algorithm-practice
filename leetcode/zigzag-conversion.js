/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

const assert = require("assert");
const convert = function (s, numRows) {
  if (numRows < 2) {
    return s;
  }
  const len = s.length;

  let line = 0;
  let currentLetter = s[0];
  const results = new Array(numRows).fill("");
  let isDown = true;
  console.log(0, line);

  for (let index = 1; index < len; index++) {
    results[line] += currentLetter;

    console.log(index, line);
    
    currentLetter = s[index];


    if (index / (len - 1) === 0) {
      isDown = true;
      // line++;
    } else if ( index % (numRows - 1) === 0 ) {
      isDown = false;
      // line--;
    }
    
    if (isDown) {
      line++;
    } else {
      line--;
    }

    


  }

  // while (currentLetter) {
  //   if (index / len === 0) {
  //     isDown = true;
  //   } else if (index + 1 % numRows === 0) {
  //     isDown = false;
  //   } else {
  //     if (isDown) {
  //       line++;
  //     } else {
  //       line--;
  //     }
  //   }
  //   console.log(line, index);
  //   // console.log(results[line]);
  //   results[line] += currentLetter;
  //   // console.log(results);

  //   index++;
  //   currentLetter = s[index];
  // }

  console.log(results);
  return results.reduce((a, b) => a + b, "").join("");
};

assert.strictEqual(convert("PAYPALISHIRING", 3), "PAHNAPLSIIGYIR");
// assert.strictEqual(convert("PAYPALISHIRING", 4), "PINALSIGYAHRPI");
