import {
  getDiagonalDownLeftIndexes,
  getDiagonalDownRightIndexes,
  getDiagonalUpLeftIndexes,
  getDiagonalUpRightIndexes,
  getDownIndexes,
  getUpIndexes,
} from './basic';

export const getWhitePawnIndexes = (index: number) => {
  const [first, second] = getUpIndexes(index);

  return index / 8 >= 6 ? [[first, second]] : [[first]];
};

export const getWhiteCapturableIndexes = (index: number) => [
  [getDiagonalUpLeftIndexes(index)[0]],
  [getDiagonalUpRightIndexes(index)[0]],
];

export const getBlackPawnIndexes = (index: number) => {
  const [first, second] = getDownIndexes(index);

  return index / 8 < 2 ? [[first, second]] : [[first]];
};

export const getBlackCapturableIndexes = (index: number) => [
  [getDiagonalDownLeftIndexes(index)[0]],
  [getDiagonalDownRightIndexes(index)[0]],
];
