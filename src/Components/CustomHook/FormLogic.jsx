import { useState } from "react"

export const FormLogic = () =>{
   const[inputValue,setInputValue] = useState({name:"",email:"",password:""});
   const[saveData,setSaveData] = useState([]);
   const[error,setError] = useState("")

   const handleInput = (e)=>{
        const{name,value} = e.target;
        setInputValue((prevValue)=>({
            ...prevValue,[name]:value
        }))
   }

   const handleSaveData = (e) =>{ 
    e.preventDefault();
       try {
        if(!inputValue.name || !inputValue.email || !inputValue.password){
            setError("All fields are mandatory")
            return
        }
        setError("")
        setSaveData((prevData)=>[...prevData,inputValue]);
        setInputValue({name:"",email:"",password:""})

       } catch (error) {
        setError(error)
       }
   }

   return {inputValue,saveData,handleInput,handleSaveData,error}
}