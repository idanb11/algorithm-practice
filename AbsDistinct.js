// function solution(A) {
//   let i = 0;
//   let j = A.length - 1;
//   let counter = 0;

//   while (i <= j) {
//     const head = Math.abs(A[i]);
//     const tail = Math.abs(A[j]);
//     if (head > tail) {
//       i++;
//     } else if (head < tail){

//     } else {

//     }
//   }
// }

// // public void reverse(char[] str) {
// //   int i = 0, j = str.length - 1;
// //   while (i < j) {
// //       swap(str, i, j);
// //       i++;
// //       j--;
// //   }
// // }

function solution(A) {
  const set = new Set();

  for (let i = 0; i < A.length; i++) {
    if (!set.has(Math.abs(A[i]))) {
      set.add(Math.abs(A[i]));
    }
  }
  return set.size;
}
