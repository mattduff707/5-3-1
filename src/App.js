import { useState } from "react";
import Form from "./components/Form";
import Results from "./components/Results";

function App() {
  const lifts = ["squat", "bench", "deadlift", "press"];
  const defaultMax = 0;
  const trainingMaxMultiplier = 0.9;

  /*Conditions for input*/
  const isNumber = (val) => {
    return !isNaN(parseFloat(val)) && !isNaN(val - 0);
  };
  const isEmptyStr = (val) => val === "";
  const isNotSpace = (val) => {
    const str = val.toString();
    return !str.includes(" ");
  };
  const isLength = (maxLength, val) => {
    const strVal = val.toString();
    return strVal.length <= maxLength;
  };

  /*Curry Func*/
  const curryTwoValues = (f) => {
    return function (a) {
      return function (b) {
        return f(a, b);
      };
    };
  };
  const curryLength = curryTwoValues(isLength);
  const validInputLength = 4;
  const isLengthValid = curryLength(validInputLength);
  /***********/

  const isValid = (val, [...strictFuncs], [...conditionalFuncs]) => {
    const isStrict = strictFuncs.map((e) => e(val)).every((e) => e === true);
    const areConditionsMet = conditionalFuncs.map((e) => e(val)).includes(true);
    return isStrict && areConditionsMet ? true : false;
  };

  // Initializes default state values based on the lifts array and defaultMax value
  const setDefaultLifts = (arr, val) => {
    const initialObj = {};
    return arr.reduce((obj, item) => {
      return {
        ...obj,
        [item]: {
          trueMax: val,
          trainingMax: val * trainingMaxMultiplier,
        },
      };
    }, initialObj);
  };
  /* Updates the state for both the original value passed into the input
   and calculates the training max for each lift based on the inputs value*/
  const handleChange = (e) => {
    const inputVal = e.target.value;
    if (
      isValid(inputVal, [isLengthValid, isNotSpace], [isEmptyStr, isNumber])
    ) {
      const newState = {
        ...liftMaxState,
        [e.target.id]: {
          trueMax: inputVal,
          trainingMax: inputVal * trainingMaxMultiplier,
        },
      };
      setLiftMaxState(() => {
        return newState;
      });
    }
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
