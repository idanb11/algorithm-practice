/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function removeDuplicates(s, k) {
  if (s.length < 2) {
    return s;
  }
  const array = s.split("");
  let isChanged = true;
  while (isChanged) {
    isChanged = false;
    for (let i = 0; i < array.length && array.length > k; i++) {
      const currentValue = array[i];
      let j;
      for (j = 1; j <= k; j++) {
        const nextValue = array[i + j];
        if (!nextValue || nextValue !== currentValue) {
          break;
        }
      }
      if (j === k) {
        array.splice(i, k);
        isChanged = true;
      }
    }
  }

  return array.join("");
}

console.log(removeDuplicates("deeedbbcccbdaa", 3));

console.log(removeDuplicates("deeedbbcccbdaa", 2));
