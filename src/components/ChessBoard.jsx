import React from "react";

import Square from "./Square";
import {
  BOARD_FILES,
  BOARD_RANKS,
  SQUARES_PER_EDGE,
  SQUARES_PER_BOARD,
} from "../commons/constants";

const ChessBoard = ({ onSquareClick }) => {
  const generateSquareId = (i) => {
    let squareId;

    // TODO:  row handling sucks
    if (i < SQUARES_PER_EDGE) {
      squareId = BOARD_RANKS[i] + BOARD_FILES[BOARD_FILES.length - 1];
    } else if (i < 2 * SQUARES_PER_EDGE) {
      squareId =
        BOARD_RANKS[i % SQUARES_PER_EDGE] + BOARD_FILES[BOARD_FILES.length - 2];
    } else if (i < 3 * SQUARES_PER_EDGE) {
      squareId =
        BOARD_RANKS[i % SQUARES_PER_EDGE] + BOARD_FILES[BOARD_FILES.length - 3];
    } else if (i < 4 * SQUARES_PER_EDGE) {
      squareId =
        BOARD_RANKS[i % SQUARES_PER_EDGE] + BOARD_FILES[BOARD_FILES.length - 4];
    } else if (i < 5 * SQUARES_PER_EDGE) {
      squareId =
        BOARD_RANKS[i % SQUARES_PER_EDGE] + BOARD_FILES[BOARD_FILES.length - 5];
    } else if (i < 6 * SQUARES_PER_EDGE) {
      squareId =
        BOARD_RANKS[i % SQUARES_PER_EDGE] + BOARD_FILES[BOARD_FILES.length - 6];
    } else if (i < 7 * SQUARES_PER_EDGE) {
      squareId =
        BOARD_RANKS[i % SQUARES_PER_EDGE] + BOARD_FILES[BOARD_FILES.length - 7];
    } else if (i < 8 * SQUARES_PER_EDGE) {
      squareId =
        BOARD_RANKS[i % SQUARES_PER_EDGE] + BOARD_FILES[BOARD_FILES.length - 8];
    }

    return squareId;
  };

  const renderSquares = () =>
    [...Array(64)].map((_, i) => {
      let fileNotation = "";
      let rankNotation = "";

      const renderBothNotations = i === SQUARES_PER_BOARD - SQUARES_PER_EDGE;
      const renderFileNotation = i === 0 || i % SQUARES_PER_EDGE === 0;
      // TODO: why this slice works
      const renderRankNotation = [...Array(SQUARES_PER_BOARD).keys()]
        .slice(BOARD_RANKS.length - SQUARES_PER_EDGE)
        .includes(i);

      if (renderBothNotations) {
        fileNotation = "1";
        rankNotation = "A";
        return (
          <Square
            id={generateSquareId(i)}
            key={i + 1}
            notation={[rankNotation, fileNotation]}
            axis={"A1"}
            onSquareClick={onSquareClick}
          />
        );
      }

      if (renderFileNotation) {
        fileNotation =
          BOARD_FILES[BOARD_FILES.length - 1 - i / SQUARES_PER_EDGE];
        return (
          <Square
            id={generateSquareId(i)}
            key={i + 1}
            notation={fileNotation}
            axis={"file"}
            onSquareClick={onSquareClick}
          />
        );
      }

      if (renderRankNotation) {
        rankNotation = BOARD_RANKS[SQUARES_PER_EDGE - SQUARES_PER_BOARD + i];
        return (
          <Square
            id={generateSquareId(i)}
            key={i + 1}
            notation={rankNotation}
            axis={"rank"}
            onSquareClick={onSquareClick}
          />
        );
      }

      return null;
    });

  return (
    <div className="board-coords-wrapper flex">
      <div className="chess-board flex">{renderSquares()}</div>
    </div>
  );
};

export default ChessBoard;
