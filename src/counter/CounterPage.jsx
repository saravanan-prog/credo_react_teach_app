import { useState } from "react";

export default function CounterPage(){

    const [count,setCount] = useState(0);


    return (
        <>
            <div className="title">
                <h3>Counter Page </h3>
            </div>
            
            <div>
                Current : {count}
            </div>

            <div>
                <button onClick={() => setCount(count + 1)}> ADD </button>
            </div>
        
        </>
    )
}
