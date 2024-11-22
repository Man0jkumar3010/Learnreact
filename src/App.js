import "./App.css"
import { Conditional } from "./Components/Conditional"
import { Controlled } from "./Components/Controlled Components/Controlled"
import { UnControlled } from "./Components/Controlled Components/UnControlled"
import { AddTaskForm } from "./Components/props/AddTaskForm"
import { UseRef } from "./Components/Ref/UseRef"

function App() {
  return (
    <div className="App">
      <Conditional />
      <hr></hr>
      <AddTaskForm />
      <hr></hr>
      <UseRef />
      <hr></hr>
      <Controlled />
      <hr></hr>
      <UnControlled />
    </div>
  )
}

export default App
