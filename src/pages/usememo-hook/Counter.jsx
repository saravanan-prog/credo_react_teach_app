import { useMemo, useRef, useState } from "react"


const expensiveCalc = (item) => {
    console.log("item===>",item)
    for(let i=0; i<1000000000; i++) {}   /* blocked */

    return item * 2
}


export default function Counter(){

    const [count,setCount] = useState(0)
    const [expInput,setExpinput] = useState(2)
    

    const squreResult = useMemo(()=>{
        return expensiveCalc(expInput)
    },[expInput])


    return <div>
        <input type="text" onChange= {(e)=>setExpinput(e.target.value)} />
        <p>SqureResult : {squreResult}</p>

        <p> Counter : {count} </p>
        <button onClick={()=>setCount(count + 1)}>ADD count </button>

        

    </div>
}