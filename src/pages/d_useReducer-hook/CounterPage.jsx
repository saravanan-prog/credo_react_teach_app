import { useReducer } from "react"
import { counterAction } from "./counter.action"

export default function CounterPage(){
   
    const [count,dispatch] = useReducer(counterAction,0)
    

    return (
        <>
            <div>
                <h3> Counter Page </h3>
            </div>

            <div>
                <p> Count : {count} </p>
            </div>

            <div>
                <button onClick={()=>dispatch({type:"ADD",input:2})}>Add + 2</button>
                <button onClick={()=>dispatch({type:"ADD",input:2})}>sub</button>
                <button onClick={()=>dispatch({type:"ADD",input:2})}>Mul</button>
            </div>
        
        </>
    )
}