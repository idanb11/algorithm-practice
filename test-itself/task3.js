const assert = require("assert").strict;

function solution(S, K) {
  const len = S.length;

  if (len <= 2) {
    return len;
  }

  const counters = {};
  let pointer1 = 0;
  let pointer2 = 1;
  let output = "";

  while (pointer1 <= len - 1) {
    if (S[pointer1] === S[pointer2]) {
      counters[pointer1] = counters[pointer1] ? counters[pointer1] + 1 : 1;
      pointer2++;
    } else {
      output += `${
        pointer2 - pointer1 <= 1
          ? S[pointer1]
          : pointer2 - pointer1 + S[pointer1]
      }`;
      pointer1 = pointer2;
      pointer2 = pointer1 + 1;
    }
  }
  console.log(output);
  return output;
}

// assert.strictEqual(solution("ABBBCCDDCCC"), "A3B2C2D3C");
// assert.strictEqual(solution("AAAAAAAAAAABXXAAAAAAAAAA"), "11AB2X10A");
// assert.strictEqual(solution("ABCDDDEFG"), "ABC3DEFG");

assert.strictEqual(solution("ABBBCCDDCCC", 3), "A3B4C");
