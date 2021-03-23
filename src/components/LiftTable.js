import styled from "styled-components";
import TrainingMax from "./TrainingMax";
import WeeklyLifts from "./WeeklyLifts";
import LiftMaxInput from "./LiftMaxInput";

const LiftTable = ({ liftMaxState, lifts, handleChange }) => {
  const weeklyPercentages = {
    "Week One": { percentages: [0.65, 0.75, 0.85], reps: 5 },
    "Week Two": { percentages: [0.7, 0.8, 0.9], reps: 3 },
    "Week Three": { percentages: [0.75, 0.85, 0.95], reps: 1 },
    "Week Four": { percentages: [0.4, 0.5, 0.6], reps: 5 },
  };

  return (
    <Table>
      <TableHead>
        <tr>
          {lifts.map((lift, index, arr) => {
            const tableHead = `-table-head`;
            const trainingMax = liftMaxState[lift].trainingMax;
            const trueMax = liftMaxState[lift].trueMax;
            const columnPercentage = String((1 / arr.length) * 100) + "%";
            return (
              <HeadCell cellWidth={columnPercentage} key={lift + tableHead}>
                <LiftHeader>{lift}</LiftHeader>
                <LiftMaxInput
                  key={lift}
                  liftName={lift}
                  liftValue={trueMax}
                  handleChange={handleChange}
                />
                <TrainingMax
                  id={lift + tableHead}
                  key={lift + tableHead}
                  lift={lift}
                  liftValue={trainingMax}
                />
              </HeadCell>
            );
          })}
        </tr>
      </TableHead>
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

const Table = styled.table`
  width: 100%;
  border: blue solid 2px;
  & > thead,
  tbody {
    background-color: orange;
  }
`;
const TableHead = styled.thead`
  height: 150px;
  max-width: 100%;
`;
const HeadCell = styled.th`
  width: ${(props) => props.cellWidth};
  border: 2px solid red;
  text-align: left;
  padding-left: 10px;
`;
const LiftHeader = styled.h2`
  text-transform: capitalize;
  padding-bottom: 10px;
`;

export default LiftTable;
