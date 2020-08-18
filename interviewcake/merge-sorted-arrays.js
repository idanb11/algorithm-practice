const myArray = [11, 15];
const alicesArray = [ 12, 14, 19];

function mergeArrays(arr1, arr2) {
  if (!arr1.length || !arr2.length) {
    return [...arr1, ...arr2];
  }

  const result = [];
  let index1 = 0;
  let index2 = 0;


  while (arr1[index1] || arr2[index2]) {
    if (arr1[index1] && arr1[index1] < arr2[index2]) {
      result.push(arr1[index1]);
      index1++;
    } else {
      result.push(arr2[index2]);
      index2++;
    }
  }

  // console.log(result);
  return result;
}

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
