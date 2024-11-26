import { useState } from "react"
import './list.css'

export const TaskList = ({ todo, setTodo }) => {
  const [hoveredItem, setHoveredItem] = useState(null)

  const handleCheckBox = (index) => {
    const updatedTodo = todo.map((item, i) =>
      i === index ? { ...item, checked: !item.checked } : item
    )
    console.log(updatedTodo)

    setTodo(updatedTodo)
  }

  return (
    <div className="task-list-container">
      <ol>
        {todo.map((item, index) => (
          <div
            style={{ display: "flex", alignItems: "center" }}
            key={item.id}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}>
            <li
              className="list-items"
              style={{
                textDecoration: item.checked ? "line-through" : "none",
                marginRight: "10px",
              }}>
              {item.title}
            </li>
            {hoveredItem === index && (
              <input
                type="checkbox"
                checked={item.checked || false}
                className="through-line"
                onChange={() => handleCheckBox(index)}
              />
            )}
          </div>
        ))}
      </ol>
    </div>
  )
}
