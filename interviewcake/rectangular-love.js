const rec1 = {
  leftX: 1,
  bottomY: 1,
  width: 5,
  height: 5,
};

const rec2 = {
  leftX: 3,
  bottomY: 3,
  width: 2,
  height: 2,
};

function rectLove(rec1, rec2) {
  const result = {
    leftX: null,
    bottomY: null,
    width: 0,
    height: 0,
  };

  const maxX = Math.max(rec1.leftX, rec2.leftX);
  const minX = Math.min(rec1.leftX + rec1.width, rec2.leftX + rec2.width);

  console.log(minX - maxX);

  console.log(maxX);
  const maxY = Math.max(rec1.bottomY + rec1.height, rec2.bottomY + rec2.height);
  const minY = Math.min(rec1.bottomY, rec2.bottomY);
  console.log(maxY - minY);

  console.log(maxY);

  for (let start = Math.min(minY, minX); start < Math.max(maxX, maxY); start++) {
    if (start >= rec1.bottomY && start >= rec2.bottomY && !result.bottomY) {
      result.bottomY = start;
    } else {
      if (result.bottomY && start <= rec1.bottomY + rec1.height && start <= rec2.bottomY + rec2.height) {
        result.height++;
      }
    }

    if (start >= rec1.leftX && start >= rec2.leftX && !result.leftX) {
      result.leftX = start;
    } else {
      if (result.leftX && start <= rec1.leftX + rec1.width && start <= rec2.leftX + rec2.width) {
        result.width++;
      }
    }
  }

  if (!result.height && !result.width) {
    return {
      leftX: null,
      bottomY: null,
    };
  }

  return result;
}

console.log(rectLove(rec1, rec2));
