import React from "react";
import Square from "./Square";

const BOARD_RANKS = ["A", "B", "C", "D", "E", "F", "G", "H"];
const BOARD_FILES = ["1", "2", "3", "4", "5", "6", "7", "8"];

const ChessBoard = () => {
  const renderSquares = () =>
    [...Array(64)].map((_, i) => {
      let fileNotation = "";
      let rankNotation = "";

      const squaresPerEdge = 8;
      const numberOfSquares = 64;
      const renderBothNotations = i === numberOfSquares - squaresPerEdge;
      const renderFileNotation = i === 0 || i % squaresPerEdge === 0;
      const renderRankNotation = BOARD_RANKS.slice(
        Math.max(BOARD_RANKS.length - squaresPerEdge)
      );

      if (renderBothNotations) {
        fileNotation = "1";
        rankNotation = "A";

        return (
          <Square
            key={i + 1}
            notation={[rankNotation, fileNotation]}
            axis={"A1"}
          />
        );
      }

      if (renderFileNotation) {
        fileNotation = BOARD_FILES[BOARD_FILES.length - 1 - i / squaresPerEdge];

        return <Square key={i + 1} notation={fileNotation} axis={"file"} />;
      }

      if (renderRankNotation) {
        rankNotation = BOARD_RANKS[squaresPerEdge - numberOfSquares + i];

        return <Square key={i + 1} notation={rankNotation} axis={"rank"} />;
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
