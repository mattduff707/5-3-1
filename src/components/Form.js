import LiftMaxInput from "./LiftMaxInput";

const Form = ({ liftMaxState, handleChange, lifts }) => {
  return (
    <form>
      {lifts.map((lift) => {
        return (
          <LiftMaxInput
            key={lift}
            liftName={lift}
            liftValue={liftMaxState[lift].trueMax}
            handleChange={handleChange}
          />
        );
      })}
      {/* <LiftMaxInput
        liftName={lifts[0]}
        liftValue={liftMaxState[lifts[0]]}
        handleChange={handleChange}
      />
      <LiftMaxInput
        liftName={lifts[1]}
        liftValue={liftMaxState[lifts[1]]}
        handleChange={handleChange}
      />
      <LiftMaxInput
        liftName={lifts[2]}
        liftValue={liftMaxState[lifts[2]]}
        handleChange={handleChange}
      />
      <LiftMaxInput
        liftName={lifts[3]}
        liftValue={liftMaxState[lifts[3]]}
        handleChange={handleChange}
      /> */}
    </form>
  );
};

export default Form;
