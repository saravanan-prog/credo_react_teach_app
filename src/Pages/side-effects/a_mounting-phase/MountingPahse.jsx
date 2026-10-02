import { useState,useEffect } from "react"

export default function MountingPhase(){

    const [price,setPrice] = useState(100)
    const [tax,setTax] = useState(0)
    
    useEffect(()=>{
        // componentDidMount
        setTax(200)
        
    },[])

    return (
        <>
            <div>
                <h1> Mounting Phase </h1>
                <p> Price : {price} </p>
                <p>Tax    : {tax} </p>
                
                <button onClick={()=>setPrice(price + 1)}> Increase price </button>
    
            </div>
        
        </>
    )
}
