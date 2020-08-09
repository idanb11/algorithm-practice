function checkPalindromePermutation(input) {
  const poli = new Set();

  for (let index = 0; index < input.length; index++) {
    const element = input[index];
    if (!poli.has(element)) {
      poli.add(element);
    } else {
      poli.delete(element);
    }
  }

  return poli.size === 1;
}

console.log(checkPalindromePermutation("civic"));
console.log(checkPalindromePermutation("ivicc"));
console.log(checkPalindromePermutation("civil"));
console.log(checkPalindromePermutation("livci"));
