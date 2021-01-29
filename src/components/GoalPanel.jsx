import React from "react";

const GoalPanel = ({ nextTarget }) => {
  return (
    <div className="info-panel ">
      <p>{nextTarget}</p>
    </div>
  );
};

export default GoalPanel;
