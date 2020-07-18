const assert = require("assert").strict;

function solution(S) {
  const numOfA = S.split("").reduce((acc, x) => (x === "a" ? acc + 1 : acc), 0);
  let counter = 0;

  if (S.length < 3 || numOfA % 3 !== 0) {
    return counter;
  }

  if (numOfA % 3 !== 0) {
    return counter;
  }

  let pointer1 = 0;
  let pointer2 = 1;
  let pointer3 = 2;
  const len = S.length;

  while (pointer1 < len - 2) {
    console.log(pointer1, pointer2, pointer3);

    if (isValidSlice(S, pointer1, pointer2, pointer3)) {
      counter++;
    }
    [pointer1, pointer2, pointer3] = updatePointers(
      pointer1,
      pointer2,
      pointer3,
      len
    );
  }

  console.log(counter);
  return counter;
}

function isValidSlice(S, p1, p2, p3) {
  const p1Set = new Set(S.slice(0, p2));
  const p2Set = new Set(S.slice(p1, p2));
  const p3Set = new Set(S.slice(0, p1));


  return true;
}

function updatePointers(x, y, z, l) {
  if (z >= l - 1) {
    y++;
    z = y + 1;
    if (y >= l - 1) {
      x++;
      y = x + 1;
      z = y + 1;
    }
  } else {
    z++;
  }

  return [x, y, z];
}

solution("babaa");
// solution("ababa");
// solution("aba");
// solution("bbbbb");
