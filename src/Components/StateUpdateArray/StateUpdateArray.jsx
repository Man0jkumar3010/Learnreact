import React, { useState } from "react";
import "./stateArray.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), text: taskText, completed: false },
      ]);
      setTaskText("");
    }
  };

  const handleToggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleRemoveTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>State Update in Array</h1>
      <h4>
        Explanation: State update in an array in React involves managing and
        modifying an array within the component’s state. Since React uses a
        declarative approach for state management, you must ensure that you
        never directly mutate the state, as React relies on detecting changes in
        the state to trigger re-renders. When working with arrays, you should
        always create a new copy of the array with the required modifications
        rather than modifying the existing one.
      </h4>
      <div className="todo-input-section">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="todo-input-field"
          placeholder="Enter a task"
        />
        <button onClick={handleAddTask} className="todo-add-btn">
          Add Task
        </button>
      </div>
      <ul className="todo-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`todo-item ${task.completed ? "completed-task" : ""}`}
          >
            <span
              onClick={() => handleToggleTask(task.id)}
              className="task-text"
            >
              {task.text}
            </span>
            <button
              onClick={() => handleRemoveTask(task.id)}
              className="todo-remove-btn"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
