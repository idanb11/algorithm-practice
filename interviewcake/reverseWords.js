function reverseWords(arr) {
  let startPos = 0;
  let endPos = arr.length;
  let startSpaceIndex = arr.indexOf(" ");
  let endSpaceIndex = arr.lastIndexOf(" ");

  while (startSpaceIndex !== endSpaceIndex) {
    const startSlice = arr.slice(startPos, startSpaceIndex);
    const endSlice = arr.slice(endSpaceIndex + 1, endPos);
    const restSlice = arr.slice(startSpaceIndex, endSpaceIndex + 1);
    arr = [...endSlice, ...restSlice, ...startSlice];

    startPos += endSlice.length + 1;
    endPos -= startSlice.length + 1;
    startSpaceIndex = arr.indexOf(" ", startPos);
    endSpaceIndex = arr.lastIndexOf(" ", endPos);
  }

  console.log(arr);
  return arr;
}

let message = [
  "c",
  "a",
  "k",
  "e",
  " ",
  "p",
  "o",
  "u",
  "n",
  "d",
  " ",
  "s",
  "t",
  "e",
  "a",
  "l",
];

reverseWords(message);

console.log(message);

// console.log(message.join(""));
