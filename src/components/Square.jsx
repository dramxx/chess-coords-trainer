import React from "react";

const Square = ({ notation, axis }) => {
  return (
    <div className="square flex">
      {axis === "A1" ? (
        <>
          <span className={"rank"}>{notation[0]}</span>
          <span className={"file"}>{notation[1]}</span>
        </>
      ) : (
        <span className={axis}>{notation}</span>
      )}
    </div>
  );
};

export default Square;
