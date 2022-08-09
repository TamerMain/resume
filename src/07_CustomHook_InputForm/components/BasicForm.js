import useInput2 from "../hooks/use-input2";

const BasicForm = (props) => {
  const {
    enteredValue: enteredFirstName,
    inputIsValid: firstNameInputIsValid,
    valueIsValid: firstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput2((value) => value.trim() !== "");

  const {
    enteredValue: enteredLastName,
    inputIsValid: lastNameInputIsValid,
    valueIsValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput2((value) => value.trim() !== "");

  const {
    enteredValue: enteredEmail,
    inputIsValid: emailInputIsValid,
    valueIsValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput2((value) => value.trim() !== "");

  let formIsValid = emailIsValid && firstNameIsValid && lastNameIsValid;
  
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log([enteredFirstName, enteredLastName, enteredEmail]);
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClass = !firstNameInputIsValid
    ? "form-control"
    : "form-control invalid";
  const lastNameClass = !lastNameInputIsValid
    ? "form-control"
    : "form-control invalid";
  const emailClass = !emailInputIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameInputIsValid && (
            <p className="error-text">First name cant be empty.</p>
          )}
        </div>
        <div className={lastNameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameInputIsValid && (
            <p className="error-text">Last name cant be empty.</p>
          )}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsValid && (
          <p className="error-text">Email cant be empty or incorrect.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
