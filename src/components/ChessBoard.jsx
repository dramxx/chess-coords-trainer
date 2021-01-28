import React from "react";
import Square from "./Square";

// TODO: coords
const BOARD_RANKS = ["A", "B", "C", "D", "E", "F", "G", "H"];
const BOARD_FILES = ["1", "2", "3", "4", "5", "6", "7", "8"];

const ChessBoard = () => {
  return (
    <div className="board-coords-wrapper flex">
      <div className="chess-board flex">
        {[...Array(64)].map((placeholder, i) => {
          return <Square key={i + 1} content={i + 1} />;
        })}
      </div>
    </div>
  );
};

export default ChessBoard;
