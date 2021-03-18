import React from "react";

const Form = ({ state, handleChange }) => {
  return (
    <form>
      <label htmlFor="squat">Squat</label>
      <input
        min="0"
        id="squat"
        type="number"
        value={state.squat}
        onChange={handleChange}
      ></input>
      <label htmlFor="bench">Bench</label>
      <input
        min="0"
        id="bench"
        type="number"
        value={state.bench}
        onChange={handleChange}
      ></input>
      <label htmlFor="deadlift">Deadlift</label>
      <input
        min="0"
        id="deadlift"
        type="number"
        value={state.deadlift}
        onChange={handleChange}
      ></input>
      <label htmlFor="press">Press</label>
      <input
        min="0"
        id="press"
        type="number"
        value={state.press}
        onChange={handleChange}
      ></input>
    </form>
  );
};

export default Form;
