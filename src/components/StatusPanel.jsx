import React, { useRef, useEffect } from "react";

import { SUCCESS_EMOJI, FAIL_EMOJI } from "../commons/constants";

const StatusPanel = ({ squareClickTarget, squareClickState }) => {
  const scrollingPanelRef = useRef(null);

  useEffect(() => {
    scrollingPanelRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  });

  return (
    <div className="status-panel flex">
      <div ref={scrollingPanelRef}>
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
