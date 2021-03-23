import React from "react";

const TrainingMax = ({ liftValue, id }) => {
  return <h3>Training max: {Math.round(liftValue)}</h3>;
};

export default TrainingMax;
