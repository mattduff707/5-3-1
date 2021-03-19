import randomKeyGenerator from "../helpers/randomKeyGenerator";

const WeeklyLifts = ({ weekNum, weeklyPercentages, liftTrainingMax, reps }) => {
  const calculateLift = (multiplier, liftMax) =>
    Math.round(multiplier * liftMax);
  return (
    <td>
      {/* <h3>Week One</h3>
      <ol>
        <li>
          Lift 1: {liftMaxState.squatTraining * weeklyPercentages.weekOne[0]}
        </li>
        <li>
          Lift 2: {liftMaxState.squatTraining * weeklyPercentages.weekOne[1]}
        </li>
        <li>
          Lift 3: {liftMaxState.squatTraining * weeklyPercentages.weekOne[2]}
        </li>
      </ol> */}
      <h3>{weekNum}</h3>
      <ol>
        {weeklyPercentages.map((percentage) => {
          return (
            <li key={randomKeyGenerator()}>
              <p>{calculateLift(percentage, liftTrainingMax)} x 5</p>
            </li>
          );
        })}
      </ol>
    </td>
  );
};

export default WeeklyLifts;
