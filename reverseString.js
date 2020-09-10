// function reverseString(string) {
//   helper(0, string);
// }

// function helper(index, string) {
//   if (!string || index >= string.length) return;

//   helper(index + 1, string);

//   console.log(string[index]);
// }

const reverseString = function (s) {
  helper(0, s.length - 1, s);
};

function helper(start, end, arr) {
  if (end - start < 1) {
    return;
  }

  [arr[end], arr[start]] = [arr[start], arr[end]];

  helper(start + 1, end - 1, arr);
}

const arr = "1Idan Bercovici".split("");

reverseString(arr);

console.log(arr.join(""));
