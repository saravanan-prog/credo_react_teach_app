import { useState,useEffect } from "react"

export default function UpdatingPahse(){
    
    const [price,setPrice] = useState(475)
    const [tax,setTax] = useState(0)
    
   

    
     return (
        <>
            <div>
                <h1> Updating Phase </h1>
                <p> Price : {price} </p>
                
                <button onClick={()=>setPrice(price + 1)}> increase price </button>
    
            </div>
        
        </>
    )
}