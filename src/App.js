import "./App.css";
import { Conditional } from "./Components/Condtional/Conditional";
import { Controlled } from "./Components/Controlled Components/Controlled";
import { AddTaskForm } from "./Components/props/AddTaskForm";
import { Index } from "./Components/Quiz/Index";
import { UseRef } from "./Components/Ref/UseRef";
import { UseEffect } from "./Components/UseEffect/UseEffect";
import { UseState } from "./Components/UseState/UseState";

function App() {
  return (
    <div className="App">
     
        <Conditional />

        <AddTaskForm />
     
        <UseRef />
  
        <Controlled />
  
        <UseEffect />
  
        {/* <Index /> */}
  
        {/* <UseState /> */}
  
    </div>
  );
}

export default App;
