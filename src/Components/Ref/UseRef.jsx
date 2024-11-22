import { useRef, useState } from "react"

export const UseRef = () => {
  const boxRef = useRef(null)
  const [box2Color, setBox2Color] = useState("gold")
  const [box3Color, setBox3Color] = useState("purple")

  const handleBoxSize = (e) => {
    e.preventDefault()
    if (boxRef.current) {
      boxRef.current.style.width = "200px"
      boxRef.current.style.height = "200px"
    }
  }

  const handleChangeBox2Color = () => {
    setBox2Color(box2Color === "gold" ? "blue" : "gold")
  }

  const handleChangeBox3Color = () => {
    setBox3Color(box3Color === "purple" ? "green" : "purple")
  }

  return (
    <>
      <h1>UseRef</h1>
      <h4>
        Explanation: useRef is a React hook used to reference DOM elements or
        values without triggering a re-render. Unlike state, changes to `useRef`
        values do not cause the component to re-render. It returns a mutable
        object that persists across renders.
      </h4>
      <p>
        Example: This example demonstrates two div elements. One uses `useRef`
        to change its size, while the others use `useState` to dynamically
        change their colors.
      </p>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}>
        <div
          ref={boxRef}
          style={{ height: "100px", width: "100px", backgroundColor: "red" }}>
          Box1
          <button onClick={handleBoxSize}>Change Size</button>
        </div>

        <div
          style={{
            height: "100px",
            width: "100px",
            backgroundColor: box2Color,
            position: "relative",
          }}>
          Box2
          <button
            style={{
              position: "absolute",
              left: 0,
              display: "inline",
            }}
            onClick={handleChangeBox2Color}>
            Change Color
          </button>
        </div>

        <div
          style={{
            height: "100px",
            width: "100px",
            backgroundColor: box3Color,
          }}>
          Box3
          <button onClick={handleChangeBox3Color}>Change Color</button>
        </div>
      </div>
    </>
  )
}
