import styled from "styled-components";
import TrainingMax from "./TrainingMax";
import WeeklyLifts from "./WeeklyLifts";

const Table = styled.table`
  border: blue solid 2px;
  & > * {
    background-color: orange;
  }
`;

const LiftTable = ({ liftMaxState, lifts }) => {
  const weeklyPercentages = {
    "Week One": { percentages: [0.65, 0.75, 0.85], reps: 5 },
    "Week Two": { percentages: [0.7, 0.8, 0.9], reps: 3 },
    "Week Three": { percentages: [0.75, 0.85, 0.95], reps: 1 },
    "Week Four": { percentages: [0.4, 0.5, 0.6], reps: 5 },
  };

  return (
    <Table>
      <thead>
        <tr>
          {lifts.map((lift) => {
            const tableHead = `-table-head`;
            return (
              <th id={lift + tableHead} key={lift + tableHead}>
                <h2 style={{ textTransform: "capitalize" }}>{lift}</h2>
                <TrainingMax liftValue={liftMaxState[lift].trainingMax} />
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {Object.entries(weeklyPercentages).map(([key, value]) => {
          return (
            <tr key={key + value}>
              {lifts.map((lift) => {
                return (
                  <WeeklyLifts
                    key={key + lift}
                    weekNum={key}
                    weeklyPercentages={value.percentages}
                    liftTrainingMax={liftMaxState[lift].trainingMax}
                    reps={value.reps}
                  />
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default LiftTable;
