import { useState } from 'react';
import LiftTable from './components/LiftTable';
import AppTitle from './components/AppTitle';
import styled, { createGlobalStyle } from 'styled-components';

function App() {
  const lifts = ['squat', 'bench', 'deadlift', 'press'];
  const defaultMax = '';
  const trainingMaxMultiplier = 0.9;

  /*Conditions for input*/
  const isNumber = (val) => {
    return !isNaN(parseFloat(val)) && !isNaN(val - 0);
  };
  const isEmptyStr = (val) => val === '';
  const isNotSpace = (val) => {
    const str = val.toString();
    return !str.includes(' ');
  };
  const isLength = (maxLength, val) => {
    const strVal = val.toString();
    return strVal.length <= maxLength;
  };
  /****************/

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

  /*Function to check if input value meets all strict conditional functions and
   at least one optional conditional function */
  const isValid = (val, [...strictFuncs], [...conditionalFuncs]) => {
    const isStrict = strictFuncs.map((e) => e(val)).every((e) => e === true);
    const areConditionsMet = conditionalFuncs.map((e) => e(val)).includes(true);
    return isStrict && areConditionsMet ? true : false;
  };

  /* Updates the state for both the original value passed into the input
   and calculates the training max for each lift based on the inputs value*/
  const handleChange = (e) => {
    const inputVal = e.target.value;
    if (isValid(inputVal, [isLengthValid, isNotSpace], [isEmptyStr, isNumber])) {
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
  /*******/

  // Initializes default state values based on the lifts array and defaultMax value. This step was taken for scalability

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
  /******/

  const [liftMaxState, setLiftMaxState] = useState(setDefaultLifts(lifts, defaultMax));

  // todo: Add ability to toggle certain lifts || add different ones
  const [liftsState] = useState(lifts);

  return (
    <AppWrapper>
      <GlobalStyle />
      <FlexWrap>
        <AppTitle />
        <LiftTable liftMaxState={liftMaxState} lifts={liftsState} handleChange={handleChange} />
      </FlexWrap>
    </AppWrapper>
  );
}
const AppWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: auto;
  background-color: lightgray;
  overflow-y: hidden;
  overflow-x: auto;
`;
const FlexWrap = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
`;
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *:before, *:after {
    box-sizing: border-box
  }
`;

export default App;
