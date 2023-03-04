import { useState } from "react";
import rules from "../../data/rules.jsx";

const InputField = (props) => {
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

  const isReady = () => {
    return Object.values(fiields).every((item) => item.isReadySubmit);
  };

  const isEmail = (field, rules) => {
    return Boolean(rules[field.name].specChar);
  };

  const minLenght = (field, rules) => {
    if (field.value.length > rules[field.name].minLength) return true;
  };

  const setReadySubmit = (field, state) => {
    setFields((previosState) => {
      return {
        ...previosState,
        [field.name]: {
          ...previosState[field.name],
          isReadySubmit: state,
        },
      };
    });
  };
  // const handleChange = (event) => {
  //   props.onChangeState(isReady());
  // };

  const fieldChangeHandler = (evt) => {
    const value = evt.target.value;
    const fiield = evt.target;
    const name = fiield.name;
    console.log(value);

    setFields((previosState) => {
      console.log(previosState[name], 777);
      console.log(name, value);

      console.log(fiields, 909);
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

  const fieldChecker = (field) => {
    if (!isEmail(field, rules) && minLenght(field, rules)) {
      setReadySubmit(field, true);
      console.log(field, 888);
    } else if (isEmail(field, rules)) {
      if (field.value.includes("@")) {
        setReadySubmit(field, true);
      }
    } else {
      setReadySubmit(field, false);
    }

    isReady();
    //  handleChange(isReady());
  };

  return <input value={fiields[props.name].value} name={props.name} onChange={fieldChangeHandler} />;
};

export default InputField;
