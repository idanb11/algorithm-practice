const assert = require("assert").strict;

// function solution(S) {
//   if (S.length === 0) {
//     return 1;
//   }

//   if (S.length == 2) {
//     if (S[0] === "{" && S[1] === "{") {
//       return 1;
//     }

//     if (S[0] === "(" && S[1] === ")") {
//       return 1;
//     }

//     if (S[0] === "[" && S[1] === "]") {
//       return 1;
//     }
//   }

//   let openIndex = 0;
//   let closeIndex;

//   if (S[0] === "(") {
//     closeIndex = S.indexOf(")");
//   }

//   if (S[0] === "[") {
//     closeIndex = S.indexOf("]");
//   }

//   if (S[0] === "{") {
//     closeIndex = S.indexOf("}");
//   }

//   if (closeIndex === -1) {
//     return 0;
//   }

//   return (
//     solution(S.slice(openIndex + 1, closeIndex)) &&
//     solution(S.slice(closeIndex + 1))
//   );
// }

function solution(S) {
  const stack = [];
  const obj = { ")": "(", "}": "{", "]": "[" };

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(" || S[i] === "{" || S[i] === "[") {
      stack.push(S[i]);
    } else {
      const last = stack.pop();
      if (obj[S[i]] !== last) return 0;
    }
  }
  return stack.length === 0 ? 1 : 0;
}

assert.strictEqual(solution("{[()()]}"), 1);

assert.strictEqual(solution("([)()]"), 0);

assert.strictEqual(solution(""), 1);

assert.strictEqual(solution(")("), 0);

assert.strictEqual(solution("()(()())((()())(()()))"), 1);

assert.strictEqual(solution("({{({}[]{})}}[]{})"), 1);

assert.strictEqual(solution("))(("), 0);

assert.strictEqual(solution("}}{{"), 0);

assert.strictEqual(solution("})({"), 0);

assert.strictEqual(solution("(}{)"), 0);
