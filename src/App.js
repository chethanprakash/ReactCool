import logo from './logo.svg';
import './App.css';
import TextField from './component/TextField';

function App() { //component
  return (      //JSX Expression
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <TextField></TextField>
        <p><input></input>React is Awesome</p> 
        <TextField></TextField>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
