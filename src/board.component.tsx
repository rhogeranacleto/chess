import { useReducer } from 'react';
import './chess.scss';
import {
  IBoard,
  getNewBoard,
  initializeBoard,
  getHighlightSquares,
  movePieceInIndexTo,
} from './engine/board';
import { classNames } from './helpers';

interface IGame {
  board: IBoard;
  selectedSquare?: number;
}

const INITIAL_GAME: IGame = {
  board: initializeBoard(getNewBoard()),
  selectedSquare: undefined,
};

type Action =
  | { type: 'set_selected_square'; index: number }
  | { type: 'move_piece_to'; index: number };

const gameReducer = (game: IGame, action: Action): IGame => {
  switch (action.type) {
    case 'set_selected_square':
      return {
        ...game,
        selectedSquare: action.index,
      };
    case 'move_piece_to':
      console.log('viam ote');

      if (!game.selectedSquare) return game;

      return {
        selectedSquare: undefined,
        board: movePieceInIndexTo(
          game.board,
          game.selectedSquare,
          action.index,
        ),
      };
    default:
      return game;
  }
};

export const GameBoard = () => {
  const [{ board, selectedSquare }, dispatch] = useReducer(
    gameReducer,
    INITIAL_GAME,
  );

  const hightLightSquares = getHighlightSquares(board, selectedSquare);

  return (
    <div className="board">
      {board.map((piece, i) => {
        const isHighlighted = hightLightSquares.includes(i);

        return (
          <div
            className={classNames({
              square: true,
              selected: selectedSquare === i,
              hightlight: isHighlighted,
            })}
            data-index={i}
            onClick={
              isHighlighted
                ? () => dispatch({ type: 'move_piece_to', index: i })
                : undefined
            }
          >
            {piece && (
              <div
                className="piece"
                onClick={() =>
                  dispatch({ type: 'set_selected_square', index: i })
                }
              >
                {piece}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
