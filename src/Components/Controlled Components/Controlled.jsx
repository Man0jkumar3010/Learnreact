import { useState } from "react"

export const Controlled = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [error, setError] = useState()

  const handleOnchange = (e) => {
    const { name, value } = e.target
    setInputData((prevInput) => ({
      ...prevInput,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputData.name || !inputData.email || !inputData.password) {
      setError("Required all fields")
    }

    setError("")
    setInputData({
      name: "",
      email: "",
      password: "",
    })
    console.log("Data stored Successfully", inputData)
  }

  return (
    <>
      <h1>Controlled Component</h1>
      <h4>
        Explanation : A controlled component in React is an input element (or
        form control) whose value is controlled by React's state. The value of
        the input is tied to the component's state, and user input triggers
        state updates via event handlers.
      </h4>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name{" "}
            <input
              type="text"
              value={inputData.name}
              placeholder="Enter your Name"
              onChange={handleOnchange}
              name="name"
            />
          </label>
        </div>
        <div>
          <label>
            Email{" "}
            <input
              type="text"
              value={inputData.email}
              placeholder="Enter your Email"
              onChange={handleOnchange}
              name="email"
            />
          </label>
        </div>
        <div>
          <label>
            Password{" "}
            <input
              type="text"
              value={inputData.password}
              placeholder="Enter your Password"
              onChange={handleOnchange}
              name="password"
            />
          </label>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
