import React from "react";
import styled from "styled-components";

const LiftMaxInput = ({ liftName, liftValue, handleChange }) => {
  const inputMin = 0;
  const inputMax = 3000;
  const inputType = "text";

  return (
    <div>
      <label style={{ textTransform: "capitalize" }} htmlFor={liftName}>
        True Max:{" "}
      </label>
      <StyledInput
        min={inputMin}
        max={inputMax}
        id={liftName}
        name={liftName}
        type={inputType}
        value={liftValue}
        onChange={handleChange}
      ></StyledInput>
    </div>
  );
};

const StyledInput = styled.input`
  width: 75px;
`;

export default LiftMaxInput;
