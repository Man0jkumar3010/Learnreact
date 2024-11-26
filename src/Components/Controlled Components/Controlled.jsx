import { useState } from "react";
export const Controlled = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setInputData((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputData.name || !inputData.email || !inputData.password) {
      setError("All fields are required.");
      return;
    }

    setError("");
    setData((prevData) => [...prevData, inputData]);
    console.log("Data ===>", data);

    setInputData({
      name: "",
      email: "",
      password: "",
    });
  };

  const formStyle = {
    width: "300px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    margin: "8px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "4px",
    fontWeight: "bold",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#00008B",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  };

  const errorStyle = {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px",
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Controlled Component</h1>
      <h4 style={{ textAlign: "left", marginBottom: "20px" }}>
        Explanation: A controlled component in React is an input element whose
        value is controlled by React's state. The value of the input is tied to
        the component's state, and user input triggers state updates via event
        handlers.
      </h4>

      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label htmlFor="name" style={labelStyle}>
            Name
          </label>
          <input
            id="name"
            type="text"
            value={inputData.name}
            placeholder="Enter your Name"
            onChange={handleOnchange}
            name="name"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>
            Email
          </label>
          <input
            id="email"
            type="text"
            value={inputData.email}
            placeholder="Enter your Email"
            onChange={handleOnchange}
            name="email"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="password" style={labelStyle}>
            Password
          </label>
          <input
            id="password"
            type="password"
            value={inputData.password}
            placeholder="Enter your Password"
            onChange={handleOnchange}
            name="password"
            style={inputStyle}
          />
        </div>
        {error && <p style={errorStyle}>{error}</p>}
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
      <h3 style={{ textAlign: "center" }}>Submitted Data:</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index} style={{ listStyle: "none", textAlign: "center" }}>
            Name: {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};
