import styled from "styled-components";

const Table = styled.table`
  border: blue solid 2px;
  & > * {
    background-color: orange;
  }
`;

const LiftTable = ({ state, lifts }) => {
  const trainingMaxMultiplier = 0.9;

  const renderTrainingMax = (end, acc) => {
    if (end.length > acc.length) {
      acc.push(
        <td key={`training-max-key-${end[acc.length]}`}>
          <p id={`training-max-${end[acc.length]}`}>
            Training max:{" "}
            {Math.round(state[end[acc.length]] * trainingMaxMultiplier)}
          </p>
        </td>
      );
      renderTrainingMax(end, acc);
    }
    return acc;
  };

  return (
    <Table>
      <thead>
        <tr>
          {lifts.map((lift) => {
            return (
              <th id={`table-head-${lift}`} key={`table-head-${lift}`}>
                <h2 style={{ textTransform: "capitalize" }}>{lift}</h2>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        <tr>{renderTrainingMax(lifts, [])}</tr>
      </tbody>
    </Table>
  );
};

export default LiftTable;
