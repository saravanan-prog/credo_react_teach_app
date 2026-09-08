import { useState,useCallback,useMemo } from "react"
import Childcomponent from './Childcomponent'

export default function Parentcomponent(){

    const [count,setCount] = useState(0)
    
    
    const showMessage = useCallback(() => console.log(" Hi i am Parent Component "),[])
  


    return <div>

        <div class="counter-inforamtion">
            <p> Count :  {count} </p>
            <button onClick = {() => setCount(count + 1)}> Add count </button>
        </div>
       
        <div className ="child-component">
            
            <Childcomponent showMessage ={showMessage} />   
              
        </div>
       
        
    </div>
}