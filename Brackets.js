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
  const obj = {")": "(", "}": "{", "]": "["};
  let counter = 0;

  const openers = new Set(Object.values(obj));
  const closers = new Set(Object.keys(obj));

  for (let i = 0; i < S.length; i++) {
    if (openers.has(S[i])) {
      stack.push(S[i]);
    } else if (closers.has(S[i])) {
      const last = stack.pop();
      console.log(last, obj[S[i]]);
      if (obj[S[i]] !== last) return false;
    }
    if (S[i] === "|") {
      counter++;
    }

    console.log(stack);
  }
  return stack.length === 0 && counter % 2 === 0;
}

assert.strictEqual(solution("{[|(ggg)||()|]}"), true);

// assert.strictEqual(solution("([)()]"), false);

// assert.strictEqual(solution(""), true);

// assert.strictEqual(solution(")("), false);

// assert.strictEqual(solution("()(()())((()())(()()))"), true);

// assert.strictEqual(solution("({{({}[]{})}}[]{})"), true);

// assert.strictEqual(solution("))(("), false);

// assert.strictEqual(solution("}}{{"), false);

// assert.strictEqual(solution("})({"), false);

// assert.strictEqual(solution("(}{)"), false);
