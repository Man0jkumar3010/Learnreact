import { Card } from "@mantine/core";
import "./Style/question.css";

export const QuestionCard = ({ data }) => {
  console.log(data);

  return (
    <div className="question-card">
        {data?.map((item)=>(
            <p key={item.id}> {item.question}</p>
        ))}
    </div>
  );
};
