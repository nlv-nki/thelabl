import { useState } from "react";
const ControlInput = () => {
  const [telephone, setTelephone] = useState("+7");

  const Handler = (e) => {
    const val = e.target.value;
    if (val.length < 2 || val.length > 10) {
      return;
    }

    if (isNaN(val.slice(2))) {
      return;
    }

    setTelephone(val);
  };
  return (
    <>
      <input value={telephone} onChange={Handler} />
      <button>Click</button>
    </>
  );
};

export default ControlInput;
