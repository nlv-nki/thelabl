import InputField from "./../InputField/InputField.jsx";
import Button from "./../Button/Button.jsx";
import { useState } from "react";

const Form = () => {
  const [fiields, setFields] = useState({
    login: {
      value: "1",
      isReadySubmit: false,
    },
    password: {
      value: "2",
      isReadySubmit: false,
    },
    email: {
      value: "3",
      isReadySubmit: false,
    },
  });
  console.log(fiields, 99999);

  const fieldChangeHandler = (evt) => {
    const value = evt.target.value;
    const fiield = evt.target;
    const name = fiield.name;
    console.log(fiields, 9997822);

    setFields((previosState) => {
      return {
        ...previosState,
        [name]: {
          ...previosState[name],
          value: value,
        },
      };
    });
    fieldChecker(fiield);
  };

  return (
    <>
      <InputField name="login" onChange={fieldChangeHandler} />
      <InputField name="password" onChange={fieldChangeHandler} />
      <InputField name="email" onChange={fieldChangeHandler} />
      <Button />
    </>
  );
};

export default Form;
