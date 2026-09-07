import { useMemo, useState } from "react"

const calculateSquareArea = (square) => {
    console.log("Calc square is calling....")
    for(let i=0; i<1000000000; i++) {}
    return square * square
}


export default function SquareProgram(){

   const [count,setCount] = useState(0)
   const [square,setSquare] = useState(2)
   
   const squareArea = useMemo(() => {
        return calculateSquareArea(square)
   },[square])

   return (
    <>
        <div>
            <h3> Counter Program </h3>
            <p> Count : {count}</p>
            <button onClick={()=>setCount(count + 1)}> ADD </button>
        </div>
        <div>
            <h3> Find a Square Value </h3>
             SQuare : <input type="text" value = {square}  onChange={(e)=>setSquare(e.target.value)}/>
            <p>Square Area : {squareArea}</p>
        </div>
    </>
   )
    


   
     
}

