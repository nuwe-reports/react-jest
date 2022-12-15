import logo from "./logo.svg";
import "./App.css";
import AcceptCookies from "./components/AcceptCookies";
import TextBox from "./components/TextBox";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="App-container">
          <AcceptCookies />
        </div>
        <div className="App-container">
          <TextBox />
        </div>
      </header>
    </div>
  );
}

export default App;
