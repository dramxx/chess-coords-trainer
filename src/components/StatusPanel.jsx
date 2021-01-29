import React from "react";

import { SUCCESS_EMOJI, FAIL_EMOJI } from "../commons/constants";

const StatusPanel = ({ squareClickTarget, squareClickState }) => {
  return (
    <div className="status-panel ">
      <div>
        {squareClickTarget.map((_, i) =>
          squareClickState[i] ? (
            <div key={i}>
              <span>{squareClickTarget[i]}</span>
              {SUCCESS_EMOJI}
            </div>
          ) : (
            <div key={i}>
              <span>{squareClickTarget[i]}</span>
              {FAIL_EMOJI}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default StatusPanel;
