import { useContext } from "react"
import { counterContext } from "../../../context/generalContext"
import Buttons from "./Buttons"


export default  function DisplayCount(){

    const {count} = useContext(counterContext)


    return (
        <>
          
            <div>
               <p> count : {count}</p> 
               <Buttons />
            </div>
        
        
        </>
    )
}