/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = function (s) {
  // const stack = [];
  // let stars = 0;

  // if (!s || !s.length) {
  //   return true;
  // }

  // for (let index = 0; index < s.length; index++) {
  //   const element = s[index];

  //   if (element === "(") {
  //     stack.push("(");
  //   } else if (element === "*") {
  //     stars++;
  //   } else if (element === ")") {
  //     const last = stack.pop();
  //     console.log(last, element, s[index - 2], s[index - 1] ,  index);

  //     if (last !== "(") {
  //       if ((s[index - 2] !== "*" || s[index - 1] !== "*") && stars > 0) {
  //         stars--;
  //       } else {
  //         return false;
  //       }
  //     }
  //   }
  // }
  // return stack.length ? false : true;

  let leftBalance = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == "(" || s.charAt(i) == "*") leftBalance++;
    else leftBalance--;

    console.log(leftBalance);
    if (leftBalance < 0) return false;
  }
  if (leftBalance == 0) return true;
  let rightBalance = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) == ")" || s.charAt(i) == "*") rightBalance++;
    else rightBalance--;

    if (rightBalance < 0) return false;
  }
  return true;
};

// console.log(checkValidString("(*))"));
// console.log(checkValidString("((*)"));

console.log(checkValidString("())("));

// console.log(checkValidString("((*))"));
// console.log(checkValidString("((*"));
