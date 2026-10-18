import { useCallback, useState } from "react"

export default function Calculator(){
    console.log("Component Rendering...")
    
    const [count,setCount] = useState(0)
    
    const doSomething = useCallback(() => {
        console.log("do something")
    },[])

    const addCount = () => {
        setCount(count + 1)
    }
   
    return (
        <div>
            <div>
                <button onClick={doSomething}>Do Something</button>
            </div>
            <div>
                <p> Count : {count} </p>
                <button onClick={addCount}> Add count </button>
            </div>
        </div>
    )
}