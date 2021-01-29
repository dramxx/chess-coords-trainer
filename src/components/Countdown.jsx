import React, { useState, useEffect } from "react";

const Countdown = ({ countdown, timeOut }) => {
  const [timer, setTimer] = useState(countdown);

  // TODO: cleanup timeout
  useEffect(() => {
    if (timer > 0) setTimeout(() => setTimer(timer - 1), 1000);
    if (timer === 0) timeOut();
  }, [timer, timeOut]);

  return <div className="countdown">{timer}</div>;
};

export default Countdown;
