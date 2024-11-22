import { useRef, useState } from "react"

const Useref =() =>{
    const [value,setValue]  = useState(0)
    const stringRef = useRef();
    const numRef = useRef();

    const inputString = () =>{
       console.log(stringRef.current);
       stringRef.current.style.width = "400px"
    }
    
    const inputNumber = () =>{
        console.log(numRef.current);   
        stringRef.current.style.width = "200px" 
    }

    return(
        <div>
            <input type="text" placeholder="String" value={value} ref={stringRef} onChange={(e)=>setValue(e.target.value)}/>
            <input type="number" placeholder="Number" value={value} onChange={(e)=>setValue(e.target.value)} ref={numRef}/>
            <button onClick={inputString}>String</button>
            <button onClick={inputNumber}>Number</button>
        </div>
    )
}

export default Useref;