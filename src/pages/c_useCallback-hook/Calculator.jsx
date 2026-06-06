import { useCallback, useState } from "react"

export default function Calculator(){

    
    const [count,setCount] = useState(0)

    const sampleFun = useCallback(()=>{
        console.log("sample function is triggred...")
    },[])

   
    
    return <div>
        <div>
            <p> Count : {count} </p>
            <button onClick={()=>setCount(count + 1)}> Add count </button>
        </div>
    </div>
}