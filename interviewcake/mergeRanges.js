function mergeRanges(arr) {
  arr.sort((a, b) => a.startTime - b.startTime);

  const merged = [arr[0]];

  for (let index = 1; index < arr.length; index++) {
    const element1 = merged[merged.length - 1];
    const element2 = arr[index];

    if (element1.endTime >= element2.startTime) {
      element1.endTime = Math.max(element1.endTime, element2.endTime);
    } else {
      merged.push(element2);
    }
  }

  console.log(merged);
  return merged;
}

mergeRanges([
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
]);
