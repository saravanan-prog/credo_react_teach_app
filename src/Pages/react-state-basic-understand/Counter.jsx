import { useState } from "react"

export default function Counter(){

    const [count,setCount] = useState(0)
    const [sqrt,setSqrt] = useState(count)

    return <div>
        <p> Count : {count} </p>
        <button  onClick = { () => setCount(count + 1) } > Add count </button>

        <p> Count Squre : {sqrt} </p>
        <button onClick = {() => setSqrt(count ** 2) } > Squrt </button>
    </div>
}