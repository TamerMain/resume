import { useState } from "react";

const useInput2 = (validateInput) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateInput(enteredValue); // .trim() !== ("")
  const inputIsValid = !valueIsValid && isTouched; 

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    enteredValue: enteredValue,
    inputIsValid: inputIsValid,
    valueIsValid: valueIsValid,
    valueChangeHandler: valueChangeHandler,
    inputBlurHandler: inputBlurHandler,
    reset: reset,
  };
};

export default useInput2;
