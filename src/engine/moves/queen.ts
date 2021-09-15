import {
  getUpIndexes,
  getRightIndexes,
  getDownIndexes,
  getLeftIndexes,
  getDiagonalUpLeftIndexes,
  getDiagonalUpRightIndexes,
  getDiagonalDownRightIndexes,
  getDiagonalDownLeftIndexes,
} from './basic';

export const getQueenIndexes = (index: number) =>
  [
    getUpIndexes,
    getDiagonalUpRightIndexes,
    getRightIndexes,
    getDiagonalDownRightIndexes,
    getDownIndexes,
    getDiagonalDownLeftIndexes,
    getLeftIndexes,
    getDiagonalUpLeftIndexes,
  ].map((fn) => fn(index));
