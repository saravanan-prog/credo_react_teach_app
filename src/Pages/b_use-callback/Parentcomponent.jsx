import { useState,useCallback,useMemo, lazy,Suspense } from "react"


const Childcomponent = lazy(()=>import('./Childcomponent'))


export default function Parentcomponent(){

    const [count,setCount] = useState(0)
    
    
    const showMessage = useCallback(() => {
        console.log(" Hi i am Parent Component ")
    },[])


    return <div>

        <div class="counter-inforamtion">
            <p> Count :  {count} </p>
            <button onClick = {() => setCount(count + 1)}> Add count </button>
        </div>
       

        <div className ="child-component">
            <Suspense fallback={<h2>Child componet is loading...</h2>}>
                <Childcomponent showMessage ={showMessage} />
            </Suspense>
              
        </div>
       
        
    </div>
}