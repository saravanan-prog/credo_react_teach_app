import { use, useEffect, useState } from "react"

export default function Example1(){

    const[count,setCount] = useState(0)
    const[sqrt,setSqrt] = useState(Math.sqrt(count))

    useEffect(()=>{

        setSqrt(Math.sqrt(count))

        return(
            () =>{
                console.log("Unmont phase")
            }
        )

    },[count])


   


    return <div>
         <h1> Side Effect Hook UnderStand</h1>
         <h4> Count : {count} </h4>
         <p> Squrt of count : {sqrt} </p>
         <button onClick = {() => setCount(count + 1)}>Add count </button>



    </div>
}