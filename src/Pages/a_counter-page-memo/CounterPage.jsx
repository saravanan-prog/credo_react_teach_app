import {  useState } from "react"
import Childcomponent from "./components/Childcomponent"

export default function CounterPage(){

    const [count,setCount] = useState(0)
    const [name,setName] = useState("Saravanan")
    
    return <div>
        <h1>Counter Page</h1>
        <div className="counter-inforamtion">
            <p> Count :  { count } </p>
            <button onClick = {() => setCount(count + 1)}> Add count </button>
        </div>

        <div>
            <Childcomponent name = {name}  />
        </div>
    </div>
}