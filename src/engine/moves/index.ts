import { Pieces } from '../pieces';
import { getBishopIndexes } from './bishop';
import { getKingIndexes } from './king';
import { getKnightIndexes } from './knight';
import { getBlackPawnIndexes, getWhitePawnIndexes } from './pawn';
import { getQueenIndexes } from './queen';
import { getRookIndexes } from './rook';

export const PIECES_MOVES: Record<string, (index: number) => number[][]> = {
  [Pieces.black_rook]: getRookIndexes,
  [Pieces.white_rook]: getRookIndexes,
  [Pieces.black_knight]: getKnightIndexes,
  [Pieces.white_knight]: getKnightIndexes,
  [Pieces.black_bishop]: getBishopIndexes,
  [Pieces.white_bishop]: getBishopIndexes,
  [Pieces.black_queen]: getQueenIndexes,
  [Pieces.white_queen]: getQueenIndexes,
  [Pieces.black_king]: getKingIndexes,
  [Pieces.white_king]: getKingIndexes,
  [Pieces.black_pawn]: getBlackPawnIndexes,
  [Pieces.white_pawn]: getWhitePawnIndexes,
};
