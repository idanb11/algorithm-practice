function reverseArray(arr) {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex < endIndex) {
    [arr[endIndex], arr[startIndex]] = [arr[startIndex], arr[endIndex]];
    startIndex++;
    endIndex--;
  }

  console.log(arr);
}
reverseArray("idany".split(""));
