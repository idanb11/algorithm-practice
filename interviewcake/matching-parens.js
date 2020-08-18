function findMathParens(string, index) {
  if (string.charAt(index) !== "(") {
    throw new Error("No parenthesis at given index");
  }

  const stack = [];

  for (let start = index; start < string.length; start++) {
    const element = string[start];
    if (element === "(") {
      stack.push(element);
    }

    if (element === ")") {
      stack.pop();
      if (stack.length === 0) {
        return start;
      }
    }
  }

  throw new Error("No matching parenthesis for given parenthesis index");
}

const input = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.";

console.log(findMathParens(input, 10));
