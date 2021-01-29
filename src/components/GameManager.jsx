import React, { useState } from "react";
import WelcomeScreen from "../Screens/WelcomeScreen";
import GameScreen from "../Screens/GameScreen";
import GameOverScreen from "../Screens/GameOverScreen";

import { BOARD_FILES, BOARD_RANKS, GAME_STATE } from "../commons/constants";

const GameManager = () => {
  const [squareClickTarget, setSquareClickTarget] = useState([]);
  const [squareClickState, setSquareClickState] = useState([]);
  const [gameState, setGameState] = useState(GAME_STATE.welcome);

  const generateTargetSquare = () => {
    const randomRank =
      BOARD_RANKS[Math.floor(Math.random() * BOARD_RANKS.length)];

    const randomFile =
      BOARD_FILES[Math.floor(Math.random() * BOARD_FILES.length)];

    return randomRank + randomFile;
  };

  const [targetSquare, setTargetSquare] = useState(generateTargetSquare());

  const handleGameLoop = (id) => {
    noteSquareClick(id);
    setTargetSquare(generateTargetSquare());
  };

  const noteSquareClick = (id) => {
    setSquareClickTarget([...squareClickTarget, id]);
    setSquareClickState([...squareClickState, id === targetSquare]);
  };

  const handleGameStart = () => {
    setSquareClickTarget([]);
    setSquareClickState([]);
    setGameState(GAME_STATE.playing);
  };

  const handleTimeOut = () => {
    setGameState(GAME_STATE.gameOver);
  };

  const calculateScore = () => {
    return {
      total: squareClickState.length,
      correct: squareClickState.filter((e) => e !== false).length,
    };
  };

  return (
    <div className="game-manager flex">
      {gameState === GAME_STATE.welcome && (
        <WelcomeScreen startGame={handleGameStart} />
      )}
      {gameState === GAME_STATE.playing && (
        <GameScreen
          className="flex"
          squareClickState={squareClickState}
          squareClickTarget={squareClickTarget}
          handleGameLoop={handleGameLoop}
          nextTarget={targetSquare}
          handleTimeOut={handleTimeOut}
        />
      )}
      {gameState === GAME_STATE.gameOver && (
        <GameOverScreen score={calculateScore()} startGame={handleGameStart} />
      )}
    </div>
  );
};

export default GameManager;
