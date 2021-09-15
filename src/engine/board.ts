import { flatten } from '../fp/flatten';
import { toFP, toPipeline } from '../fp/flow';
import { PIECES_MOVES } from './moves';
import { getInitialPiecePositionByIndex, isAKnight, Pieces } from './pieces';

export type IBoard = string[];

export const getNewBoard = (): IBoard => new Array(64).fill(Pieces.white_queen);

export const getChunkedBoard = (board: IBoard) =>
  board.reduce<string[][]>(
    (boardChunked, square) => {
      const lastLine = boardChunked[boardChunked.length - 1];

      if (lastLine.length < 8) {
        lastLine.push(square);

        return boardChunked;
      }

      return [...boardChunked, [square]];
    },
    [[]],
  );

enum ColumIndexes {
  a = 0,
  b = 1,
  c = 2,
  d = 3,
  e = 4,
  f = 5,
  g = 6,
  h = 7,
}

export const getIndexFromCoodinates = (
  column: keyof typeof ColumIndexes,
  line: number,
) => (8 - line) * 8 + ColumIndexes[column];

export const getLineIndex = (index: number) => 8 - Math.floor(index / 8);

export const getColumnIndex = (index: number) =>
  index - (getLineIndex(index) + 8) * 8;

export const initializeBoard = (board: IBoard) =>
  board.map((value, i) => getInitialPiecePositionByIndex(i));

export const getAvailableIndexesForAll = (
  moveIndexes: number[],
  board: IBoard,
) => {
  const firstIndexWithPiece = moveIndexes.findIndex(
    (index) => board[index] !== '',
  );

  return firstIndexWithPiece >= 0
    ? moveIndexes.filter((_, i) => i < firstIndexWithPiece)
    : moveIndexes;
};

export const getAvailableIndexesForKnight = (
  moveIndexes: number[],
  board: IBoard,
) => {
  console.log(moveIndexes);
  return moveIndexes.filter((index) => board[index] === '');
};

const getAvailableIndexes = (
  indexes: number[][],
  board: IBoard,
  pieceIndex: number,
) =>
  indexes.map((moveIndexes) =>
    isAKnight(board[pieceIndex])
      ? getAvailableIndexesForKnight(moveIndexes, board)
      : getAvailableIndexesForAll(moveIndexes, board),
  );

export const chooseMovesGetterByPiece = (index: number, board: IBoard) =>
  PIECES_MOVES[board[index]];

export const getHighlightSquares = (board: IBoard, index?: number) => {
  if (!index) return [];

  const getAvailableIndexesOfBoard = toFP(getAvailableIndexes, index, board);

  const highlightSquaresPipeline = toPipeline(
    chooseMovesGetterByPiece(index, board),
    getAvailableIndexesOfBoard,
    flatten,
  );

  return highlightSquaresPipeline(index) as number[];
};

export const movePieceInIndexTo = (
  board: IBoard,
  originalIndex: number,
  targetIndex: number,
) => {
  const boardCopy = [...board];
  const availableIndexes = getHighlightSquares(board, originalIndex);

  if (availableIndexes.includes(targetIndex)) {
    boardCopy[targetIndex] = boardCopy[originalIndex];
    boardCopy[originalIndex] = '';
  }

  return boardCopy;
};
