import { useState } from "react"

export default function Example1(){

    const[count,setCount] = useState(0)
  

   


    return <div>
         <h1> Side Effect Hook UnderStand</h1>
         <h4> Count : {count} </h4>
         <button onClick = {() => setCount(count + 1)}>Add count </button>



    </div>
}