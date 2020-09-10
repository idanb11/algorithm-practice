function getRow(index) {
  if (index === 0) {
    return [1];
  }

  if (index === 1) {
    return [1, 1];
  }

  const results = [];

  for (let j = 1; j <= index + 1; j++) {
    results.push(f(index + 1 , j));
  }

  return results;
}

function f(i, j) {
  if (j === 1 || j === i) {
    return 1;
  }
  return f(i - 1, j - 1) + f(i - 1, j);
}

console.log(getRow(6));
// console.log(f(3, 3));

// f(i,j)= f(i−1,j−1) + f(i−1,j)

// f(i,j)=1 where j=1 or j=i
