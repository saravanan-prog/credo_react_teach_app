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
                <button onClick = { ()=>dispatch({"type":"add"}) }>Add</button>
                <button onClick = { ()=>dispatch({"type":"sub"}) }>sub</button>
                <button>Mul</button>
            </div>
        
        </>
    )
}