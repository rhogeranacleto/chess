export enum Pieces {
  white_king = '♔',
  white_queen = '♕',
  white_bishop = '♗',
  white_knight = '♘',
  white_rook = '♖',
  white_pawn = '♙',
  black_king = '♚',
  black_queen = '♛',
  black_bishop = '♝',
  black_knight = '♞',
  black_rook = '♜',
  black_pawn = '♟',
}

export const getInitialPiecePositionByIndex = (index: number) => {
  switch (index) {
    case 0:
    case 7:
      return Pieces.black_rook;
    case 1:
    case 6:
      return Pieces.black_knight;
    case 2:
    case 5:
      return Pieces.black_bishop;
    case 3:
      return Pieces.black_queen;
    case 4:
      return Pieces.black_king;
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
      return Pieces.black_pawn;
    case 56:
    case 63:
      return Pieces.white_rook;
    case 57:
    case 62:
      return Pieces.white_knight;
    case 58:
    case 61:
      return Pieces.white_bishop;
    case 59:
      return Pieces.white_queen;
    case 60:
      return Pieces.white_king;
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
      return Pieces.white_pawn;
    default:
      return '';
  }
};

export const isAKnight = (piece: string) =>
  piece === Pieces.white_knight || piece === Pieces.black_knight;
