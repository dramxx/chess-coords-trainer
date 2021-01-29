import React from "react";

import { GAME_DURATION } from "../commons/constants";
import StatusPanel from "../components/StatusPanel";
import ChessBoard from "../components/ChessBoard";
import GoalPanel from "../components/GoalPanel";
import Countdown from "../components/Countdown";

const GameScreen = ({
  squareClickState,
  squareClickTarget,
  handleGameLoop,
  nextTarget,
  handleTimeOut,
}) => (
  <>
    <StatusPanel
      className="flex"
      squareClickState={squareClickState}
      squareClickTarget={squareClickTarget}
    />
    <ChessBoard onSquareClick={handleGameLoop} />
    <GoalPanel className="flex" nextTarget={nextTarget} />
    <Countdown countdown={GAME_DURATION} timeOut={handleTimeOut} />
  </>
);

export default GameScreen;
