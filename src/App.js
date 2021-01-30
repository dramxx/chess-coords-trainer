import React from "react";
import GameManager from "./components/GameManager";
import "./App.css";

// TODO:
// => add game start preloader
// => store high score in localStorage
// => return feedback on current score based on high score

const App = () => {
  return (
    <div className="App flex">
      <GameManager />
    </div>
  );
};

export default App;
