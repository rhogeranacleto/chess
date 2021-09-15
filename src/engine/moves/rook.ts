import {
  getUpIndexes,
  getRightIndexes,
  getDownIndexes,
  getLeftIndexes,
} from './basic';

export const getRookIndexes = (index: number) =>
  [getUpIndexes, getRightIndexes, getDownIndexes, getLeftIndexes].map((fn) =>
    fn(index),
  );
