import React from "react";
import { GAME_DURATION } from "../commons/constants";

const GameOverScreen = ({ score, startGame }) => {
  return (
    <>
      <div className="screen-wrapper">
        <h1 className="headline">awesome</h1>
        <p className="cta">
          You did <strong>{score.correct}</strong> correct out of{" "}
          <strong>{score.total}</strong> total hits
        </p>
        <p className="cta">
          in <strong>{GAME_DURATION}</strong> seconds!
        </p>
        <button className="start-button" onClick={() => startGame()}>
          restart!
        </button>
      </div>
    </>
  );
};

export default GameOverScreen;
