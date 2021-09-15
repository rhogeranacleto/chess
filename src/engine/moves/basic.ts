export const getUpIndexes = (index: number) => {
  const upIndexes: number[] = [];
  while ((index -= 8) >= 0) {
    upIndexes.push(index);
  }
  return upIndexes;
};

export const getDownIndexes = (index: number) => {
  const downIndexes: number[] = [];
  while ((index += 8) < 64) {
    downIndexes.push(index);
  }
  return downIndexes;
};

export const getLeftIndexes = (index: number) =>
  new Array(index % 8).fill(0).map((v, i) => index - i - 1);

export const getRightIndexes = (index: number) =>
  new Array(8 - (index % 8) - 1).fill(0).map((v, i) => index + i + 1);

export const getDiagonalUpLeftIndexes = (index: number) => {
  const upLeftIndexes: number[] = [];
  const originalColumn = index % 8;

  while ((index -= 9) >= 0 && index % 8 < originalColumn) {
    upLeftIndexes.push(index);
  }

  return upLeftIndexes;
};

export const getDiagonalUpRightIndexes = (index: number) => {
  const upRightIndexes: number[] = [];
  const originalColumn = index % 8;

  while ((index -= 7) >= 0 && index % 8 > originalColumn) {
    upRightIndexes.push(index);
  }

  return upRightIndexes;
};

export const getDiagonalDownLeftIndexes = (index: number) => {
  const downLeftIndexes: number[] = [];
  const originalColumn = index % 8;

  while ((index += 7) < 64 && index % 8 < originalColumn) {
    downLeftIndexes.push(index);
  }

  return downLeftIndexes;
};

export const getDiagonalDownRightIndexes = (index: number) => {
  const downRightIndexes: number[] = [];
  const originalColumn = index % 8;

  while ((index += 9) < 64 && index % 8 > originalColumn) {
    downRightIndexes.push(index);
  }

  return downRightIndexes;
};
