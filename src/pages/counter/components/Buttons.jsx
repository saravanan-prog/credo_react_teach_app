import { useContext } from "react"
import { counterContext } from "../../../context/generalContext"


export default  function Buttons(){

    const {addition} = useContext(counterContext)

    return (
        <>
            
            <div>
                <button onClick={() => addition(100)}> Add </button>
            </div>
        
        
        </>
    )
}