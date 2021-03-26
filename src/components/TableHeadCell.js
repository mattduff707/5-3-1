import React from "react";
import LiftMaxInput from "./LiftMaxInput";
import TrainingMax from "./TrainingMax";
import styled from "styled-components";

const TableHeadCell = ({
  lift,
  trainingMax,
  trueMax,
  cellWidth,
  handleChange,
}) => {
  const tableHead = `-table-head`;

  return (
    <HeadCell cellWidth={cellWidth} key={lift + tableHead}>
      <LiftHeader>{lift}</LiftHeader>
      <LiftMaxInput
        key={lift}
        liftName={lift}
        liftValue={trueMax}
        handleChange={handleChange}
      />
      <TrainingMax lift={lift} liftValue={trainingMax} />
    </HeadCell>
  );
};
const HeadCell = styled.th`
  width: ${(props) => props.cellWidth};
  text-align: left;
  padding-left: 10px;
  border: 2px solid hsl(12, 45%, 13%);
`;
const LiftHeader = styled.h2`
  text-transform: capitalize;
  padding-bottom: 10px;
`;

export default TableHeadCell;
