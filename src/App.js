import { useState } from "react";
//import Form from "./components/Form/Form";
function App() {
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

  const rules = {
    login: {
      minLength: 5,
      specChar: false,
    },
    password: {
      minLength: 10,
      specChar: false,
    },

    email: {
      minLength: 5,
      specChar: "@",
    },
  };

  const isReady = () => {
    //  console.log(Object.values(fiields).every((item) => item.isReadySubmit));
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
    console.log(fiields);
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

    isReady();
  };

  return (
    <div className="App">
      <input value={fiields.login.value} name="login" onChange={fieldChangeHandler} />
      <input value={fiields.password.value} name="password" onChange={fieldChangeHandler} />
      <input value={fiields.email.value} name="email" onChange={fieldChangeHandler} />
      <button disabled={isReady() ? "" : true}>Add User</button>
    </div>
  );
}

export default App;
