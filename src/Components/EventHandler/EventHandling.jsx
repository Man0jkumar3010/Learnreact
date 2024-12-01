import React, { useState } from "react";
import "./event.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(10);

  const handleIncrement = () => {
    if (count < limit) {
      setCount(count + 1);
    } else {
      alert("Limit reached!");
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Cannot go below 0!");
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleLimitChange = (e) => {
    const newLimit = Number(e.target.value);
    if (!isNaN(newLimit) && newLimit >= 0) {
      setLimit(newLimit);
    }
  };

  return (
    <div className="main-container">
      <h1>Event Handler</h1>
      <h4>
        Explanation:An event handler in React is a function that is executed
        when a specific event occurs, such as a click, input change, form
        submission, or mouse hover. React uses a synthetic event system, which
        is a wrapper around the browser's native events, ensuring better
        cross-browser compatibility.
      </h4>
      <div className="counter-container">
        <h1 className="counter-title">React Counter</h1>
        <div className="counter-display">
          <p>
            Count: <span className="count-number">{count}</span>
          </p>
        </div>
        <div className="counter-controls">
          <button className="btn increment-btn" onClick={handleIncrement}>
            Increment
          </button>
          <button className="btn decrement-btn" onClick={handleDecrement}>
            Decrement
          </button>
          <button className="reset-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
        <div className="counter-limit">
          <label htmlFor="limit" className="limit-label">
            Set Limit:
          </label>
          <input
            type="number"
            id="limit"
            value={limit}
            className="limit-input"
            onChange={handleLimitChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Counter;
