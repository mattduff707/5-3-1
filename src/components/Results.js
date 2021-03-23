import LiftTable from "./LiftTable";
import styled from "styled-components";

const Results = ({ liftMaxState, lifts }) => {
  return (
    <ResultsWrapper>
      <LiftTable liftMaxState={liftMaxState} lifts={lifts} />
    </ResultsWrapper>
  );
};

const ResultsWrapper = styled.div`
  width: 100%;
  background-color: blue;
  display: flex;
  justify-content: center;
`;

export default Results;
