import React from "react";

import { SUCCESS_EMOJI, FAIL_EMOJI } from "../commons/constants";

const GoalPanel = ({ nextTarget, squareClickTarget, squareClickState }) => {
  return (
    <div className="info-panel ">
      <div style={{ fontSize: "25px", paddingBottom: "25px" }}>
        <span style={{ marginRight: "20px" }}>{squareClickTarget}</span>
        <>
          {squareClickState ? (
            <span type="img">{SUCCESS_EMOJI}</span>
          ) : (
            <span type="img">{FAIL_EMOJI}</span>
          )}
        </>
      </div>
      <p>{nextTarget}</p>
    </div>
  );
};

export default GoalPanel;
