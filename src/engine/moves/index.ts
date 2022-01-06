import { Piece } from '../pieces';
import { getBishopIndexes } from './bishop';
import { getKingIndexes } from './king';
import { getKnightIndexes } from './knight';
import {
  getBlackCapturableIndexes,
  getBlackPawnIndexes,
  getWhiteCapturableIndexes,
  getWhitePawnIndexes,
} from './pawn';
import { getQueenIndexes } from './queen';
import { getRookIndexes } from './rook';

export const PIECES_MOVES: Record<string, (index: number) => number[][]> = {
  [Piece.black_rook]: getRookIndexes,
  [Piece.white_rook]: getRookIndexes,
  [Piece.black_knight]: getKnightIndexes,
  [Piece.white_knight]: getKnightIndexes,
  [Piece.black_bishop]: getBishopIndexes,
  [Piece.white_bishop]: getBishopIndexes,
  [Piece.black_queen]: getQueenIndexes,
  [Piece.white_queen]: getQueenIndexes,
  [Piece.black_king]: getKingIndexes,
  [Piece.white_king]: getKingIndexes,
  [Piece.black_pawn]: getBlackPawnIndexes,
  [Piece.white_pawn]: getWhitePawnIndexes,
};

export const PIECES_CAPTURABLE: Record<string, (index: number) => number[][]> =
  {
    ...PIECES_MOVES,
    [Piece.black_pawn]: getBlackCapturableIndexes,
    [Piece.white_pawn]: getWhiteCapturableIndexes,
  };
