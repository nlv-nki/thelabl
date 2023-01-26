import logo from "./logo.svg";
import "./App.css";
import Square from "./Square";

function App() {
  // const onClick = () => {
  //   alert("test");
  // };
  const onClick2 = () => {
    alert("test2");
  };
  const onClick3 = () => {
    alert("test3");
  };

  const RadiusSquare = () => {
    let elem = document.querySelector("div.square");
    elem.style.borderRadius = "50%";
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Square background="pink" left="100px" top="150px" onClickSquare={RadiusSquare} />
        <Square background="red" left="350px" top="150px" onClickSquare={onClick2} />
        <Square background="blue" left="600px" top="150px" onClickSquare={onClick3} />
      </header>
    </div>
  );
}

export default App;
