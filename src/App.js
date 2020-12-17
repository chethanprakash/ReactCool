import logo from './logo.svg';
import './App.css';
import TextField from './component/TextField';
import MyButton from './component/MyButton';

function App() { //component
  return (      //JSX Expression
    <div className="App">
      <header className="App-header">
        <TextField bgColor='yellow'></TextField>
        <MyButton text="Cancel"></MyButton>
        <MyButton text="Save"></MyButton>
        <TextField bgColor='red'></TextField>
        </header>
    </div>
  );
}

export default App;
