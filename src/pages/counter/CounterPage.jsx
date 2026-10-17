import { useState } from "react";
import DisplayCount from "./components/DisplayCount";
// ADD the create context.
import { CounterContext } from "../../context/globalStore";  

export default  function CounterPage(){

    const [count,setCount] = useState(25)

    const addition = (item) => {
        setCount(count + item)
    }

    return (
        <>
            <div>
                <h3> Simple Calculator </h3>
            </div>
            
            <div>
                <CounterContext.Provider 
                    value = {
                        {
                           count: count, 
                           addition : addition
                        }
                    }
                >
                    <DisplayCount />
                </CounterContext.Provider>
            </div>
        
        </>
    )
}