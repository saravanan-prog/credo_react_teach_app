import {  useState,useMemo } from "react"

const calcSquare = (square) => {
    console.log("Square calc is calling...")
    for(let i=0; i<1000000000; i++){}
    return square * square
}

export default function SquareProgram(){

    console.log("Component Re-rendering")

    const [sqaure,setSquare] = useState(0)
    const [count,setCount]   = useState(0)

    const squareArea = useMemo(()=>{
        return calcSquare(sqaure)
    },[sqaure])
    


   return (
        <>
            <div>
                <div className="h3 text-center text-primary">Square Program</div>
                <div>
                    <label> Enter Square Value </label>
                    <input type="text"
                        onChange = {(event)=>setSquare(event.target.value) } 
                        value = {sqaure}  
                    />
                    <div className="h5">Square Area : {squareArea} </div>
                </div>
            </div>


            <div>
                <div className="h3 text-center">Counter Program</div>
                <div className="h5">Count : {count}</div>
                <button className="btn btn-primary" onClick={()=>setCount(count + 1)}> ADD</button>
            </div>
        </>   
   )
    


   
     
}

