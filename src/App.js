import logo from "./logo.svg";
import "./App.css";
import Square from "./Square";

function App() {
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
        <Square background="pink" left="100px" top="150px" />
        <Square background="red" left="350px" top="150px" />
        <Square background="blue" left="600px" top="150px" />
      </header>
    </div>
  );
}

export default App;
