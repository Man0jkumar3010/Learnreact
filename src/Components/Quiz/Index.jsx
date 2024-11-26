import { useState } from "react"
import { QuizHeader } from "./QuizHeader"
import './Style/index.css'
import { questions } from "./data"
import { QuestionCard } from "./QuestionCard"

export const Index = () => {
    const[data,setData] = useState(questions)


  return (
    <div>
        <QuizHeader/>
        <QuestionCard data={data}/>
    </div>
  )
}   
