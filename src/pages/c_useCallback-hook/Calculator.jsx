import { useCallback, useState } from "react"

export default function ExampleuseCallback(){

    
    const [count,setCount] = useState(0)
    
    const doSomething = useCallback(() => {
        console.log("do something")
    },[])
  
   
    
    return <div>
        <div>
            <p> Count : {count} </p>
            <button onClick={()=>setCount(count + 1)}> Add count </button>
        </div>
    </div>
}