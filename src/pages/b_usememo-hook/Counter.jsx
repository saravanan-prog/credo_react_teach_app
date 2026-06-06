import { useMemo, useState } from "react"


export default function Counter(){

    const [count,setCount] = useState(0)
    const [circle,setCircle] = useState(25)

    //const circleRadius = cicleRadiuscalc(circle)

    const circleRadius = useMemo(()=>{
        return cicleRadiuscalc(circle)
    },[circle])

    return <div>
        <div>
            <p> Count : {count} </p>
            <button onClick={()=>setCount(count + 1)}> Add count </button>
        </div>

        <div>
            <p> Circle Value : <input type="text" value={circle} onChange={(event)=>setCircle(event?.target?.value)}/> </p>
            <p> Circle Radius : {circleRadius} </p>
        </div>
    </div>
}

const cicleRadiuscalc = (circle) => {
    console.log("expensive fun calling....")
    for(let i=0; i<=1000000000; i++){}
    return Math.PI * circle
}