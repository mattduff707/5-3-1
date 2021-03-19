import LiftTable from "./LiftTable";

const Results = ({ liftMaxState, lifts }) => {
  return (
    <div>
      <LiftTable liftMaxState={liftMaxState} lifts={lifts} />
    </div>
  );
};

export default Results;
