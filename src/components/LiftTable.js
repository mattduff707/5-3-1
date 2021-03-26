import styled from "styled-components";
import WeeklyLifts from "./WeeklyLifts";
import TableHeadCell from "./TableHeadCell";

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
            const trainingMax = liftMaxState[lift].trainingMax;
            const trueMax = liftMaxState[lift].trueMax;
            const columnPercentage = String((1 / arr.length) * 100) + "%";
            const tableHead = "-table-head";
            return (
              <TableHeadCell
                key={lift + tableHead}
                lift={lift}
                trueMax={trueMax}
                trainingMax={trainingMax}
                cellWidth={columnPercentage}
                handleChange={handleChange}
              />
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
  border-collapse: collapse;

  & > thead {
    background-color: hsl(183, 25%, 33%);
    color: hsl(35, 53%, 67%);
    border: 3px solid hsl(12, 45%, 13%);
  }
  & > tbody {
    background-color: hsl(14, 31%, 43%);
    color: hsl(35, 53%, 77%);
    border: 3px solid hsl(12, 45%, 13%);
  }
`;
const TableHead = styled.thead`
  height: 150px;
  max-width: 100%;
`;

export default LiftTable;
