import { useState } from "react"
import IntroComponent from "./components/IntroComponent"
import ThankYoucomponent from "./components/ThankYoucomponent"

export default function CounterProgram(){
    
    const [count,setCount] = useState(0)

    return (
        <>
            <div>
                 <IntroComponent 
                    title = {"Counter Application"} 
                 />
                <h3> Counter Program </h3>
            </div>
            <div>
                <p>
                    <span>Current count :</span>
                    <span>{count}</span>
                </p>
                <div>
                    <button onClick={()=>setCount(count + 1 )}> ADD </button>
                </div>
            </div>

            <div>
                <ThankYoucomponent />
            </div>
        
        </>
    )
}