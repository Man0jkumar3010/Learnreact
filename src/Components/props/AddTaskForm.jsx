import React, { useEffect, useState } from "react"
import { TaskList } from "./TaskList"

export const AddTaskForm = () => {
  const data = [
    {
      id: 1,
      title: "Do workout",
      is_completed: false,
    },
    {
      id: 2,
      title: "Read books",
      is_completed: false,
    },
    {
      id: 3,
      title: "Breakfast",
      is_completed: false,
    },
  ]

  const [inputValue, setInputValue] = useState("")

  const [todos, setTodos] = useState(() => {
    const storedData = localStorage.getItem("todos")
    return storedData ? JSON.parse(storedData) : data
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const handleAddTask = (e) => {
    e.preventDefault()
    const trimValue = inputValue.trim()

    if (!trimValue || inputValue === "") {
      return
    }

    const newTodo = {
      id: Date.now(),
      title: inputValue,
      is_completed: false,
    }

    setTodos((prevTodo) => [...prevTodo, newTodo])
    setInputValue("")
  }

  return (
    <>
      <h1>Props vs State</h1>
      <h4>
        Explanation: props are a keyword that stands for properties and is used
        to pass data from parent to child components.we can share functions,
        object and array.Props is a immutable value we can't change the value of
        the property.state is a component-specific memory that stores data or
        information about a component, State is mutable value that is maintain
        within the component.
      </h4>
      <p>Example...</p>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Set your Plans"
          value={inputValue}
          name="input"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <TaskList todo={todos} setTodo={setTodos} />
    </>
  )
}

export default AddTaskForm
