import React, { useState, useCallback } from "react";
import "./TodoList.css"; 

export const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = useCallback(
    (index) => {
      setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    },
    []
  );

  return (
    <div className="todo-container">
      <h2 className="todo-title">Todo List</h2>
      <div className="todo-input-container">
        <input
          type="text"
          className="todo-input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task"
        />
        <button className="todo-add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
};

const TodoItem = React.memo(({ task, onDelete }) => {
  return (
    <li className="todo-item">
      <span className="todo-task">{task}</span>
      <button className="todo-delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
});
