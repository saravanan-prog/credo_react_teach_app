import { useState,useEffect } from "react"

export default function Example1(){

    const[count,setCount] = useState(0)
    const [countSquare,setcountSquare] = useState(count)
   

    useEffect(() => {
        
       setcountSquare(count ** 2)
      

    },[count])
  

   


    return <div>
         <h1> Side Effect Hook UnderStand</h1>
         <h4> Count : {count} </h4>
         <p> Count Squre : {countSquare} </p>
         <button onClick = {() => setCount(count + 1)}>Add count </button>

        


    </div>
}