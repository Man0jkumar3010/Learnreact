import { useRef, useState } from "react";
import "./ref.css";

export const UseRef = () => {
  const boxRef = useRef(null); 
  const [box2Color, setBox2Color] = useState("teal"); 
  const [box3Color, setBox3Color] = useState("black"); 

  const handleBoxSize = (e) => {
    e.preventDefault();
    if (boxRef.current) {
      boxRef.current.style.width = "200px";
      boxRef.current.style.height = "200px";
    }
  };


  const handleChangeBox2Color = () => {
    setBox2Color(box2Color === "white" ? "blue" : "gold");
  };


  const handleChangeBox3Color = () => {
    setBox3Color(box3Color === "black" ? "green" : "purple");
  };

  return (
    <div className="use-ref-container">
      <h1>UseRef</h1>
      <h4>
        <strong>Explanation:</strong> UseRef allows manipulating DOM elements
        directly. Box1 demonstrates size manipulation, while Box2 and Box3
        demonstrate dynamic state-based color changes.
      </h4>

      <div className="box-tasks-container">
        <div className="box-task">
          <div ref={boxRef} className="box box1">
            Box1
          </div>
          <button onClick={handleBoxSize} className="button1">Change Size</button>
        </div>
        <div className="box-task">
          <div className="box box2" style={{ backgroundColor: box2Color }}>
            Box2
          </div>
          <button onClick={handleChangeBox2Color}  className="button2">Change Color</button>
        </div>
        <div className="box-task">

          <div className="box box3" style={{ backgroundColor: box3Color }}>
            Box3
          </div>
          <button onClick={handleChangeBox3Color}  className="button3">Change Color</button>
        </div>
      </div>
    </div>
  );
};
