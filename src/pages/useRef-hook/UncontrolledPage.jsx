
import { useEffect, useRef } from "react"


export default function UncontrolledPage(){
    
    const inputRef = useRef()

    const handleClick = () => {
        console.log("input Ref===>",inputRef.current.value)
    }

    

    return <div>

        <input type="text" ref = {inputRef}  />
        <button onClick = {handleClick} > show text </button>
        
    </div>
}