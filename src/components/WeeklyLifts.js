import styled from "styled-components";

const WeeklyLifts = ({ weekNum, weeklyPercentages, liftTrainingMax, reps }) => {
  const calculateLift = (multiplier, liftMax) =>
    Math.round(multiplier * liftMax);
  return (
    <Cell>
      <h3>{weekNum}</h3>
      <List>
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
      </List>
    </Cell>
  );
};

const Cell = styled.td`
  text-align: left;
  border: 2px solid hsl(12, 45%, 13%);
  padding: 10px;
`;
const List = styled.ol`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  display: block;
  padding-left: 25px;
`;

export default WeeklyLifts;
