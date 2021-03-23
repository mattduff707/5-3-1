import LiftMaxInput from "./LiftMaxInput";
import styled from "styled-components";

const Form = ({ liftMaxState, handleChange, lifts }) => {
  return (
    <FormWrapper>
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
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  background-color: red;
  padding: 10px 0px;
`;

export default Form;
