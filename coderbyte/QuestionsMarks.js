function QuestionsMarks(str) {
  if (str.length < 5) {
    return false;
  }
  str = str.replace(/[^0-9?]/g, "");

  let pointer1 = 0;
  let pointer2;

  while (pointer1 < str.length) {
    if (str[pointer1] === "?") {
      pointer2 = pointer1 + 1;
    } else {

    }
  }
}

// keep this function call here
console.log(QuestionsMarks("9???1???9??1???95"));
// console.log(QuestionsMarks("aa6?9"));
// console.log(QuestionsMarks("acc?7??sss?3rr1??????5"));
