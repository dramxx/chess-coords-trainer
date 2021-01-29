import React, { useState, useEffect } from "react";

const Countdown = ({ countdown, timeOut }) => {
  const [timer, setTimer] = useState(countdown);

  useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
    if (timer === 0) timeOut();
  }, [timer, timeOut]);

  return (
    <div style={{ width: "50px", color: "tomato", fontSize: "25px" }}>
      {timer}
    </div>
  );
};

export default Countdown;
