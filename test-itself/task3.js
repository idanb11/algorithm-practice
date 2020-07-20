const assert = require("assert").strict;

function solution(S, K = 0) {
  const len = S.length;
  const candidates = [];

  if (len <= 2) {
    return len;
  }

  for (let index = 0; S[index + 1] && K; index++) {
    if (
      S[index] === S[index + K + 1] &&
      S.slice(index + 1, index + K).indexOf(S[index]) === -1
    ) {
      candidates.push(index);
      index += K + 1;
    }
  }
  const results = candidates.map((index) => {
    let tempString = S.split("");
    tempString.splice(index + 1, K);
    tempString = tempString.join("");
    return compressString(tempString);
  });

  return (results.length && K) ? Math.min(...results) : compressString(S.slice(0, len - K));
}

function compressString(S) {
  let output = "";
  let pointer1 = 0;
  let pointer2 = 1;

  while (S[pointer1]) {
    if (S[pointer1] === S[pointer2]) {
      pointer2++;
    } else {
      const difference = pointer2 - pointer1;
      output += difference > 1 ? difference + S[pointer1] : S[pointer1];
      pointer1 = pointer2;
      pointer2 = pointer1 + 1;
    }
  }
  return output.length;
}

assert.strictEqual(solution("ABBBCCDDCCC"), 9);
assert.strictEqual(solution("AAAAAAAAAAABXXAAAAAAAAAA"), 9);
assert.strictEqual(solution("ABCDDDEFG"), 8);

assert.strictEqual(solution("ABBBCCDDCCC", 3), 5);
assert.strictEqual(
  solution("AAAAAAAAAAABXXAAAAAAAAAAXXXAAAAAAAAAAAAAAAAAAA", 3),
  8
);
assert.strictEqual(solution("AAAAAAAAAAABXXAAAAAAAAAA", 3), 3);
assert.strictEqual(solution("ABCDDDEFG", 2), 6);
