import { useCallback, useState } from "react"

export default function Calculator(){

    const [count,setCount] = useState(0)

    const [sqrt,setSqurt] = useState(2)
    
    const showMessage = useCallback(()=> {
        setSqurt(sqrt + 1)
        console.log("saravanna is clicked",sqrt)
    },[sqrt])

 


    return <div>
       

        <p> Counter : {count} </p>
        <button onClick={()=>setCount(count + 1)}>ADD count </button>

        <p>sqrt : {sqrt}</p>
        <button onClick = {showMessage}> calc squre </button>

    </div>
}