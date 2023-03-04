import { useState } from "react";
import Button from "./components/Button/Button";
import InputField from "./components/InputField/InputField";
import rules from "./data/rules";
function App() {
  const [fiields, setFields] = useState({
    login: {
      value: "",
      isReadySubmit: false,
    },
    password: {
      value: "",
      isReadySubmit: false,
    },
    email: {
      value: "",
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

  const fieldChangeHandler = (evt) => {
    const value = evt.target.value;
    const fiield = evt.target;
    const name = fiield.name;

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

  const fieldChecker = (field) => {
    if (!isEmail(field, rules) && minLenght(field, rules)) {
      setReadySubmit(field, true);
    } else if (isEmail(field, rules)) {
      if (field.value.includes("@")) {
        setReadySubmit(field, true);
      }
    } else {
      setReadySubmit(field, false);
    }
  };

  return (
    <div className="App">
      <InputField name="login" onChange={fieldChangeHandler} />
      <InputField name="password" onChange={fieldChangeHandler} />
      <InputField name="email" onChange={fieldChangeHandler} />
      <Button
        disabled={isReady()}
        onClick={() => {
          console.log(`Your login ${fiields.login.value}`);
        }}
        name="btn"
      />
    </div>
  );
}

export default App;
