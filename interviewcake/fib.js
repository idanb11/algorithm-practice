let counter = 0;

function fib(index) {
  console.log(counter++);
  if ((index === 0) | (index === 1)) {
    return index;
  }

  // let last1 = fib(index - 1) ;
  // let last2 = fib(index - 2);

  return fib(index - 1) + fib(index - 2);
}

console.log(fib(5));
