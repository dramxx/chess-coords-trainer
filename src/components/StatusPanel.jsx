import React from "react";

import { SUCCESS_EMOJI, FAIL_EMOJI } from "../commons/constants";

const StatusPanel = ({ squareClickTarget, squareClickState }) => {
  return (
    <div className="status-panel ">
      <div>
        <span>{squareClickTarget}</span>
        <>
          {squareClickState ? (
            <span className="emoji" type="img">
              {SUCCESS_EMOJI}
            </span>
          ) : (
            <span className="emoji" type="img">
              {FAIL_EMOJI}
            </span>
          )}
        </>
      </div>
    </div>
  );
};

export default StatusPanel;
