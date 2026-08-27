import { useState,useEffect } from "react"

export default function UpdatingPahse(){
    
    const [price,setPrice] = useState(475)
    const [tax,setTax] = useState(0)
    
    useEffect( ()=>{
        let cgst  = 3.5
        let sgst = 3.5
        let taxcalculation = price + ( price * cgst /100  + price * sgst / 100)
        setTax(taxcalculation)

    },[price])

    
     return (
        <>
            <div>
                <h1> Updating Phase </h1>
                <p> Price : {price} </p>
                <p> Tax Amount : {tax}</p>
                <button onClick={()=>setPrice(price + 1)}> increase price </button>
    
            </div>
        
        </>
    )
}