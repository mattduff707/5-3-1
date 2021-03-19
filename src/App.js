import { useState } from "react";
import Form from "./components/Form";
import Results from "./components/Results";

function App() {
  const lifts = ["squat", "bench", "deadlift", "press"];
  const defaultMax = 200;
  const training = `Training`;
  const trainingMaxMultiplier = 0.9;

  // Initializes default state values based on the lifts array and defaultMax value
  const setDefaultLifts = (arr, defaultMaxVal) => {
    const initialObj = {};
    return arr.reduce((obj, item) => {
      return {
        ...obj,
        [item]: defaultMaxVal,
        [item + training]: defaultMaxVal * trainingMaxMultiplier,
      };
    }, initialObj);
  };

  /* Updates the state for both the original value passed into the input
   and calculates the training max for each lift based on the inputs value*/
  const handleChange = (e) => {
    const newState = {
      ...liftMaxState,
      [e.target.id]: e.target.value,
      [e.target.id + training]: e.target.value * trainingMaxMultiplier,
    };
    setLiftMaxState(() => {
      return newState;
    });
  };

  const [liftMaxState, setLiftMaxState] = useState(
    setDefaultLifts(lifts, defaultMax)
  );

  return (
    <div className="App">
      <Form
        liftMaxState={liftMaxState}
        lifts={lifts}
        handleChange={handleChange}
      />
      <Results liftMaxState={liftMaxState} lifts={lifts} />
    </div>
  );
}

export default App;
