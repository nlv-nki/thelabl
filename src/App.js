import "./App.scss";
import "./fonts.scss";
import logo from "./logo.svg";
import Form from "./components/Form/Form.jsx";

function App() {
  return (
    <div className="form">
      <img src={logo} className="App-logo" alt="logo" />
      <Form />
    </div>
  );
}

export default App;
