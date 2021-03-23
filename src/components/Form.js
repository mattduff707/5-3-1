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
    </form>
  );
};

export default Form;
