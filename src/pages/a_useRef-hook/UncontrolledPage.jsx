
import { useEffect, useRef, useState } from "react"

export default function UncontrolledPage(){
    
    const inputARef = useRef()
    const inputBRef = useRef()
    const [result,setResult] = useState()
    
    const caluclate = () => {
        
        setResult(Number(inputARef?.current?.value) + Number(inputBRef?.current?.value))

    }
    
   
    return <div>

        <h1> Use Ref  Hook </h1>

        <div>
            <label>Enter A value </label>
            <input type="text" ref={inputARef}/>
        </div>

         <div>
            <label>Enter A value </label>
            <input type="text" ref={inputBRef}/>
        </div>

        <div> {result}</div>

        <div>
            <button onClick = {caluclate}> calculate </button>
        </div>

        
        
        
        
    </div>
}