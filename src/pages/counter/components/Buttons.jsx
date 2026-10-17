import { CounterContext } from "../../../context/globalStore"
import { useContext } from "react"


export default  function Buttons(){

    const { addition } = useContext(CounterContext)

    return (
        <>
            
            <div>
                <button onClick={()=>addition(1)}> Addition </button>
            </div>
        
        
        </>
    )
}