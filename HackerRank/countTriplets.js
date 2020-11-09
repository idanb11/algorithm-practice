const { CLIENT_RENEG_WINDOW } = require("tls");

function countTriplets(arr, r) {
  if (!arr || arr.length <= 1) {
    return 0;
  }
  const memo = {};
  let counter = 0;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    memo[item] = (memo[item] || 0) + 1;

    const prev = memo[parseInt(item) / r];
    const prevPrev = memo[parseInt(item) / (r * r)];

    console.log(item, parseInt(item) / r, parseInt(item) / (r * r));
    console.log(memo[item], prev, prevPrev);

    if (arr[i + 1] && arr[i] === arr[i + 1]) continue;

    if (prev && prevPrev) {
      counter += memo[item] * prev * prevPrev;
    }
  }

  return counter;
}

console.log(countTriplets([1, 3, 9, 9, 27, 81], 3));
