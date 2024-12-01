import { useState } from "react";
import "./list.css";

export const List = () => {
  const items = [
    { id: 1, name: "React" },
    { id: 2, name: "Javascript" },
    { id: 3, name: "Node Js" },
  ];

  const [data, setData] = useState(items);

  const handleAddItem = () => {
    console.log("I'm Worked");

    const newItem = { id: Date.now(), name: "Postgress SQL" };
    setData((data) => [...data, newItem]);
  };

  return (
    <div className="list-container">
      <h1>List Rendering</h1>
      <h4>
        Explanation: When rendering a list with the map() method, each list item
        must be given a unique key prop. Typically, you can use an item's unique
        identifier (like an id) for the key.
      </h4>
      <div className="list-render-container">
        <ul>
          {data.map((list) => (
            <li key={list.id}>{list.name}</li>
          ))}
        </ul>
        <button className="add-btn" onClick={handleAddItem}>
          Button
        </button>
      </div>
    </div>
  );
};
