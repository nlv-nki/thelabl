import { useState } from "react";

const InputField = () => {
  const [signSum, changeSum] = useState(false);

  const inputHandler = (event) => {
    if (event.target.value.length >= 8) {
      changeSum(true);
    }
  };

  return (
    <>
      <input type="text" onChange={inputHandler} className="input" />
      {!signSum && <button disabled>Кнопка</button>}
      {signSum && <button>Кнопка</button>}
    </>
  );
};

export default InputField;
