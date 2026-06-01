import { useState,useEffect } from "react"

export default function MountingPhaase(){

    const [price,setPrice] = useState(100)
    const [tax,setTax] = useState(0)
    
    useEffect( ()=>{

        setTax( price + ( price * 3.5 /100  + price * 3.5 / 100))
        

    },[])
   

    return <div>
        <h1> Side Effect Hook UnderStand</h1>
         <p> Price : {price} </p>
         <p> Tax Amount : {tax}</p>
         <button onClick={()=>setPrice(price + 1)}> increase price </button>
    
    </div>
}