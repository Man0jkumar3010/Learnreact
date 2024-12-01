import { useRef } from "react"
import { ChildRef } from "./ChildRef";

export const ForwardRef = () =>{
    const inputRef = useRef(null);
    
    return(
        <div>
            <ChildRef />
        </div>
    )
}
