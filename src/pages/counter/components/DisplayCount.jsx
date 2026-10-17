import Buttons from "./Buttons"
import { CounterContext } from "../../../context/globalStore"
import { useContext } from "react"

export default  function DisplayCount(){

    const { count } = useContext(CounterContext)


    return (
        <>
          
            <div>
               <p> Current Count is : {count} </p> 
               <Buttons />
            </div>
        
        
        </>
    )
}