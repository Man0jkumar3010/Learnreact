import React from "react";
import { FormLogic } from "./FormLogic";
import "./form.css";

const Form = () => {
  const { inputValue, error, saveData, handleInput, handleSaveData } =
    FormLogic();
  return (
    <div className="main-container">
      <h1>Custom Hook</h1>
      <h3>
        A custom hook is a function in React that allows us to encapsulate and
        reuse stateful logic. Here, we have created a custom hook called{" "}
        <code>FormLogic</code> to manage the state and functionality of this
        form. It helps separate the logic (state management and event handlers)
        from the UI, making the code cleaner and reusable.
      </h3>
      <p>
        <strong>
          Purpose of <code>FormLogic</code>
        </strong>
        <ul>
          <li>
            Manages the input values for the form fields (name, email, and
            password) using the <code>useState</code> hook.
          </li>
          <li>
            Handles user input changes with the <code>handleInput</code>{" "}
            function, ensuring the state updates dynamically as the user types.
          </li>
          <li>
            Validates and saves the form data into an array{" "}
            <code>saveData</code> upon submission using the{" "}
            <code>handleSaveData</code> function.
          </li>
        </ul>
        This logic is shared with the <code>Form</code> component through the
        custom hook's return values.
      </p>
      <div className="form-container">
        <form onSubmit={handleSaveData} className="form-style">
          <h2>Add New Data</h2>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={inputValue.name}
              name="name"
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              value={inputValue.email}
              name="email"
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              value={inputValue.password}
              name="password"
              onChange={handleInput}
            />
          </div>
          {inputValue && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" className="btn-save">
            Save Data
          </button>
        </form>
        {saveData.length > 0 && (
          <table className="inbox-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {saveData?.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Form;
