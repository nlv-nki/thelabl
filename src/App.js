import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [showImage, setShowImage] = useState(true);
  const [text, setTextButton] = useState("Скрыть");
  console.log("render");
  const Text = (props) => {
    return <p>Text {props.text}</p>;
  };

  const handleShowImage = () => {
    setShowImage();

    if (showImage === true) {
      setShowImage(false);
      setTextButton("Показать");
    } else {
      setShowImage(true);
      setTextButton("Скрыть");
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        {showImage && <img src={logo} className="App-logo" alt="logo" />}
        <Text text={String(showImage)} />
        <button onClick={handleShowImage}>{text}</button>
      </header>
    </div>
  );
}

export default App;
