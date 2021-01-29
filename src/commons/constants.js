const BOARD_RANKS = ["A", "B", "C", "D", "E", "F", "G", "H"];
const BOARD_FILES = ["1", "2", "3", "4", "5", "6", "7", "8"];

const GAME_DURATION = 30;
const GAME_STATE = {
  welcome: "WELCOME",
  playing: "PLAYING",
  gameOver: "GAME_OVER",
};

const SQUARES_PER_EDGE = 8;
const SQUARES_PER_BOARD = 64;

const SUCCESS_EMOJI = <span type="img">✅</span>;
const FAIL_EMOJI = <span type="img">❌</span>;

export {
  BOARD_RANKS,
  BOARD_FILES,
  GAME_DURATION,
  GAME_STATE,
  SQUARES_PER_EDGE,
  SQUARES_PER_BOARD,
  SUCCESS_EMOJI,
  FAIL_EMOJI,
};
