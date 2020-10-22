function LongestWord(sen) {
  let max = 0;
  let word = "";
  let counter = 0;

  sen = sen.replace(/[^A-Za-z0-9\s]/g, "");

  for (let i = 0; i <= sen.length; i++) {
    if (sen[i] === " " || i === sen.length) {
      if (counter > max) {
        word = sen.slice(i - counter, i);
        max = counter;
      }
      counter = 0;
    } else {
      counter++;
    }
  }

  // code goes here
  return word;
}

// keep this function call here
console.log(LongestWord("this is some sort of sentence"));
