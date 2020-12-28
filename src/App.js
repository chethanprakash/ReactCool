// import logo from './logo.svg';
// import './App.css';
import TextField from './component/TextField';
import MyButton from './component/MyButton';
import { FormSelect } from './component/userform/userformArr';
import { SkillForm } from './component/userform/skillform';
import { Userform } from './component/userform/userform';

function App() { //component
  return (      //JSX Expression
    <Userform></Userform>
    // <FormSelect></FormSelect>
    // <SkillForm></SkillForm>
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
