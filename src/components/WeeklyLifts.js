const WeeklyLifts = ({ weekNum, weeklyPercentages, liftTrainingMax, reps }) => {
  const calculateLift = (multiplier, liftMax) =>
    Math.round(multiplier * liftMax);
  return (
    <td>
      <h3>{weekNum}</h3>
      <ol>
        {weeklyPercentages.map((percentage, index, arr) => {
          const repsPlus = `${reps}+`;
          if (index === arr.length - 1) {
            return (
              <li key={percentage + weekNum}>
                <p>
                  {calculateLift(percentage, liftTrainingMax)} x {repsPlus}
                </p>
              </li>
            );
          }
          return (
            <li key={percentage + weekNum}>
              <p>
                {calculateLift(percentage, liftTrainingMax)} x {reps}
              </p>
            </li>
          );
        })}
      </ol>
    </td>
  );
};

export default WeeklyLifts;
