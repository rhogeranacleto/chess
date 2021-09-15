import { getQueenIndexes } from './queen';

export const getKingIndexes = (index: number) =>
  getQueenIndexes(index).map(([firstPosition]) => [firstPosition]);
