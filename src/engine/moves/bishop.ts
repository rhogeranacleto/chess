import {
  getDiagonalUpLeftIndexes,
  getDiagonalUpRightIndexes,
  getDiagonalDownRightIndexes,
  getDiagonalDownLeftIndexes,
} from './basic';

export const getBishopIndexes = (index: number) =>
  [
    getDiagonalUpRightIndexes,
    getDiagonalDownRightIndexes,
    getDiagonalDownLeftIndexes,
    getDiagonalUpLeftIndexes,
  ].map((fn) => fn(index));
