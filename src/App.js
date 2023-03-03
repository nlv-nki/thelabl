import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <p>timer is {time}</p>
    </div>
  );
}

export default App;
