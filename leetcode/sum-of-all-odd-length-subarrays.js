/**
 * @param {number[]} arr
 * @return {number}
 */
const sumOddLengthSubarrays = function (arr) {
  const numOfLevels = Math.ceil(arr.length / 2);

  const sum = new Array(arr.length + 1).fill(0);

  sum[0] = 0;

  for (let index = 1; index < arr.length; index++) {
    if (index % 2 === 0) {
      
    } else {

    }
  }

  console.log(sum);
  return sum[arr.length];
};

sumOddLengthSubarrays([1]);
sumOddLengthSubarrays([1, 2]);
sumOddLengthSubarrays([1, 2, 3]);
sumOddLengthSubarrays([1, 2, 3, 4]);
sumOddLengthSubarrays([1, 2, 3, 4, 5]);
sumOddLengthSubarrays([1, 2, 3, 4, 5, 6]);
