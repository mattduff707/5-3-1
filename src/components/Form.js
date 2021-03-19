import LiftMaxInput from "./LiftMaxInput";
import randomKeyGenerator from "../helpers/randomKeyGenerator";

const Form = ({ liftMaxState, handleChange, lifts }) => {
  return (
    <form>
      {lifts.map((lift) => {
        return (
          <LiftMaxInput
            key={randomKeyGenerator()}
            liftName={lift}
            liftValue={liftMaxState[lift]}
            handleChange={handleChange}
          />
        );
      })}
    </form>
  );
};

export default Form;
