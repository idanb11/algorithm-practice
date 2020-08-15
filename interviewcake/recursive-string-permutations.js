function recursiveStringPermutations(string) {
  const results = [];

  // if (!string.length) {
  //   return;
  // }

  // for (let index = 0; index < string.length; index++) {
  // results.concat(recurse(string, index));
  // }

  recurse(string, 0);

  // const arr = string.split('');
  // const start = 0;

  // return recurse(string);
}

function recurse(s, index) {
  console.log(s);
  if (s.length === 1) {
    // console.log(s.join(''), s.reverse().join());
    return new Set(s);
  }

  return recurse(s.slice(0, -1), s[s.length - 1]);

  // const last =

  // return recurse(s[0] + recurse(s.split("").pop().join("")));

  // return recurse();
}

// console.log(recursiveStringPermutations("cats"));
// ['a', 'b']

// console.log(recurse("sa"));

function getPermutations(string) {
  // Base case
  if (string.length <= 1) {
    return new Set([string]);
  }

  const allCharsExceptLast = string.slice(0, -1);
  const lastChar = string[string.length - 1];

  // Recursive call: get all possible permutations for all chars except last
  const permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);

  // Put the last char in all possible positions for each of the above permutations
  const permutations = new Set();
  permutationsOfAllCharsExceptLast.forEach(
    (permutationOfAllCharsExceptLast) => {
      for (
        let position = 0;
        position <= allCharsExceptLast.length;
        position++
      ) {
        const permutation =
          permutationOfAllCharsExceptLast.slice(0, position) +
          lastChar +
          permutationOfAllCharsExceptLast.slice(position);
        permutations.add(permutation);
      }
    }
  );

  return permutations;
}

getPermutations("cats");
