import React from "react";

const LiftMaxInput = ({ liftName, liftValue, handleChange }) => {
  const inputMin = 0;
  const inputMax = 3000;
  const inputType = "text";
  return (
    <>
      <label style={{ textTransform: "capitalize" }} htmlFor={liftName}>
        {liftName}
      </label>
      <input
        min={inputMin}
        max={inputMax}
        id={liftName}
        type={inputType}
        value={liftValue}
        onChange={handleChange}
      ></input>
    </>
  );
};

export default LiftMaxInput;
