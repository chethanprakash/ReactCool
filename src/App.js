// import logo from './logo.svg';
// import './App.css';
import TextField from './component/TextField';
import MyButton from './component/MyButton';
import { UserForm } from './component/userform/userform';
import { FormSelect } from './component/userform/userformArr';

function App() { //component
  return (      //JSX Expression
    // <UserForm></UserForm>
    <FormSelect></FormSelect>
    // <div className="App">
    //   <header className="App-header">
    //     <TextField bgColor='yellow'></TextField>
    //     <MyButton text="Cancel"></MyButton>
    //     <MyButton text="Save"></MyButton>
    //     <TextField bgColor='red'></TextField>
    //     </header>
    // </div>
  );
}

export default App;
