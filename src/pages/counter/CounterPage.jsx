import { useState } from "react";

import DisplayCount from "./components/DisplayCount";
import { counterContext } from "../../context/globalStore";

export default  function CounterPage(){

    const [count,setCount] = useState(0)

    const addition = (item) => {
        setCount(count + item)
    }

    return (
        <>
            <div><h3> Simple Calculator </h3></div>
            <div>
            <counterContext.Provider value = {
                    {
                        count:count,
                        addition : addition
                    }
                }
                
                >
                <DisplayCount />
               
            </counterContext.Provider>
            </div>
        
        
        </>
    )
}