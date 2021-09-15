import {
  getDownIndexes,
  getLeftIndexes,
  getRightIndexes,
  getUpIndexes,
} from './basic';

const plusAndSiblings = [
  getUpIndexes,
  getRightIndexes,
  getDownIndexes,
  getLeftIndexes,
].map((fn, i, list) => [
  fn,
  list[i - 1] ?? list[list.length - 1],
  list[i + 1] ?? list[0],
]);

export const getKnightIndexes = (index: number) =>
  plusAndSiblings.map(([direction, firstSiblingFN, secondSiblingFN]) => {
    const [, secondSquare] = direction(index);

    return secondSquare !== undefined
      ? [
          firstSiblingFN(secondSquare)[0],
          secondSiblingFN(secondSquare)[0],
        ].filter((i) => i !== undefined)
      : [];
  });
