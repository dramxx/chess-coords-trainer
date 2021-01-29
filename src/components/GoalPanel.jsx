import React from "react";

const GoalPanel = ({ nextTarget }) => {
  return (
    <div className="goal-panel ">
      <p>{nextTarget}</p>
    </div>
  );
};

export default GoalPanel;
