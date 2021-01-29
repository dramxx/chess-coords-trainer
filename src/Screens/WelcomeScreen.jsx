import React from "react";

const WelcomeScreen = ({ startGame }) => {
  const startCountdown = () => {
    startGame();
  };

  return (
    <>
      <div className="screen-wrapper">
        <h1 className="headline">chess-coords-trainer</h1>
        <p className="cta">Hit correct coordinates as many times as you can.</p>
        <p className="cta">You have 30 seconds.</p>
        <button className="start-button" onClick={() => startCountdown()}>
          lets do this!
        </button>
      </div>
    </>
  );
};

export default WelcomeScreen;
