import { getDownIndexes, getUpIndexes } from './basic';

export const getWhitePawnIndexes = (index: number) => {
  const [first, second] = getUpIndexes(index);

  return index / 8 >= 6 ? [[first, second]] : [[first]];
};

export const getBlackPawnIndexes = (index: number) => {
  const [first, second] = getDownIndexes(index);

  return index / 8 < 2 ? [[first, second]] : [[first]];
};
