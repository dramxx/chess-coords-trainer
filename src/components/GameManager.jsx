import React, { useState } from "react";
import GoalPanel from "./GoalPanel";
import StatusPanel from "./StatusPanel";
import ChessBoard from "./ChessBoard";
import Countdown from "./Countdown";

import {
  BOARD_FILES,
  BOARD_RANKS,
  LAST_TARGETS_COUNT,
} from "../commons/constants";

const GameManager = () => {
  const [squareClickTarget, setSquareClickTarget] = useState([]);
  const [squareClickState, setSquareClickState] = useState([]);

  const generateTargetSquare = () => {
    const randomRank =
      BOARD_RANKS[Math.floor(Math.random() * BOARD_RANKS.length)];

    const randomFile =
      BOARD_FILES[Math.floor(Math.random() * BOARD_FILES.length)];

    return randomRank + randomFile;
  };

  const handleGameLoop = (id) => {
    handleClick(id);
    setTargetSquare(generateTargetSquare());
  };

  const handleClick = (id) => {
    setSquareClickTarget([...squareClickTarget, id]);
    setSquareClickState([...squareClickState, id === targetSquare]);
  };

  const handleTimeOut = () => {
    console.log("RESET GAME");
  };

  const returnLastTargets = () => {
    let targets = squareClickTarget;

    // if (squareClickTarget.length > LAST_TARGETS_COUNT) {
    //   targets = squareClickTarget.slice(
    //     squareClickTarget.length - LAST_TARGETS_COUNT
    //   );
    //   return targets;
    // }
    return targets;
  };

  const [targetSquare, setTargetSquare] = useState(generateTargetSquare());

  return (
    <div className={"wrapper flex"}>
      <StatusPanel
        className="flex"
        squareClickState={squareClickState}
        squareClickTarget={returnLastTargets()}
      />
      <ChessBoard onSquareClick={handleGameLoop} />
      <GoalPanel className="flex" nextTarget={targetSquare} />
      <Countdown countdown={30} timeOut={handleTimeOut} />
    </div>
  );
};

export default GameManager;
