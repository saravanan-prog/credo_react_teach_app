import { useState,useEffect } from "react"

export default function MountingPhaase(){

    const [price,setPrice] = useState(100)
    const [tax,setTax] = useState(0)
    
    useEffect( ()=>{
       
        let cgst  = 3.5
        let sgst = 3.5
        let taxcalculation = price + ( price * cgst /100  + price * sgst / 100)
        setTax(taxcalculation)

    },[])
   

    return (
        <>
            <div>
                <h1> Mounting Phase </h1>
                <p> Price : {price} </p>
                <p> Tax Amount : {tax}</p>
                <button onClick={()=>setPrice(price + 1)}> increase price </button>
    
            </div>
        
        </>
    )
}