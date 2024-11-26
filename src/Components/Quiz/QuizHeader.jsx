import logo from "../../Images/quiz.png";
import "./Style/header.css";
import { RingProgress, Text } from "@mantine/core";

export const QuizHeader = () => {
  return (
    <div className="quiz-header">
      <div className="left">
        <img src={logo} alt="logo" />
        <h1>Brain Burst</h1>
      </div>
      {/* <div className="right">

      </div> */}
    </div>
  );
};
