function FindIntersection(strArr) {
  const a = new Set(strArr[0].split(", "));
  const b = new Set(strArr[1].split(", "));
  const intersection = [...a].filter((x) => b.has(x));

  return intersection.join(",") || false;
}

console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
console.log(FindIntersection(["1, 2, 3, 4, 5", "6, 7, 8, 9, 10"]));
