import { useState } from "react";
import Form from "./components/Form";
import Results from "./components/Results";

function App() {
  const lifts = ["squat", "bench", "deadlift", "press"];
  const defaultMax = 0;

  const setDefaultLifts = (arr, defaultMaxVal) => {
    const initialVal = {};
    return arr.reduce((obj, item) => {
      return {
        ...obj,
        [item]: defaultMaxVal,
      };
    }, initialVal);
  };

  const handleChange = (e) => {
    const newState = { ...state, [e.target.id]: e.target.value };
    setState(() => {
      return newState;
    });
  };

  const [state, setState] = useState(setDefaultLifts(lifts, defaultMax));

  return (
    <div className="App">
      <Form state={state} handleChange={handleChange} />
      <Results state={state} lifts={lifts} />
    </div>
  );
}

export default App;
