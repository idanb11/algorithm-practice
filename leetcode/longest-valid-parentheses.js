/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
  const arr = s.split("");
  let stack = 0;
  let counter = 0;

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    if (stack === 0 && element === ")") {
      counter++;
      stack = 0;
      continue;
    }

    if (element === "(") {
      stack++;
    } else {
      stack--;
    }
  }
  counter += stack;

  return s.length - counter;
};

console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses(")()())"));
console.log(longestValidParentheses(")()()"));
console.log(longestValidParentheses("()(()"));

