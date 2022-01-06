import { useReducer } from 'react';
import './chess.scss';
import {
  IBoard,
  getNewBoard,
  initializeBoard,
  getHighlightSquares,
  movePieceInIndexTo,
  getCapturableSquares,
} from './engine/board';
import { classNames } from './helpers';

interface IGame {
  board: IBoard;
  selectedSquare?: number;
  history: IBoard[];
}

const INITIAL_BOARD = initializeBoard(getNewBoard());

const INITIAL_GAME: IGame = {
  board: INITIAL_BOARD,
  selectedSquare: undefined,
  history: [INITIAL_BOARD],
};

type Action =
  | { type: 'set_selected_square'; index: number }
  | { type: 'move_piece_to'; index: number };

const gameReducer = (game: IGame, action: Action): IGame => {
  switch (action.type) {
    case 'set_selected_square':
      return {
        ...game,
        selectedSquare:
          game.selectedSquare === action.index ? undefined : action.index,
      };
    case 'move_piece_to':
      if (game.selectedSquare === undefined) return game;

      const board = movePieceInIndexTo(
        game.board,
        game.selectedSquare,
        action.index,
      );

      return {
        selectedSquare: undefined,
        board,
        history: [board, ...game.history],
      };
    default:
      return game;
  }
};

export const GameBoard = () => {
  const [{ board, selectedSquare, history }, dispatch] = useReducer(
    gameReducer,
    INITIAL_GAME,
  );

  const hightLightSquares = getHighlightSquares(board, selectedSquare);
  const capturable = getCapturableSquares(board, selectedSquare);

  return (
    <div>
      <div className="board">
        {board.map((piece, i) => {
          const isHighlighted = hightLightSquares.includes(i);
          const isCapturable = capturable.includes(i);

          const movePieceDispatch =
            isHighlighted || isCapturable
              ? () => dispatch({ type: 'move_piece_to', index: i })
              : undefined;
          const setSquareDispatch = piece
            ? () => dispatch({ type: 'set_selected_square', index: i })
            : undefined;

          return (
            <div
              className={classNames({
                square: true,
                selected: selectedSquare === i,
                hightlight: isHighlighted,
                capturable: isCapturable,
              })}
              data-index={i}
              onClick={movePieceDispatch || setSquareDispatch}
              key={`${i}-index`}
            >
              {piece && <div className="piece">{piece}</div>}
            </div>
          );
        })}
      </div>
      <div>
        <h4>Historico</h4>
        <ol>
          {history.map((play, i) => (
            <li key={play.join(`${i}`)}>
              {play.map((piece) => (piece === '' ? '_' : piece)).join('')}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
