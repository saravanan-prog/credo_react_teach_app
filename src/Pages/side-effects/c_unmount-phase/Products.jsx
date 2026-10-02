import { useState,useEffect } from "react";
import ProductList from "./ProductList";

export default function Products(){

    const [showproductlist,setShowproductList] = useState(true)

    useEffect(()=>{
        console.log("compoent entered")
    },[])

    return <div>
        <p> Products </p>

        <div>
            {showproductlist && <ProductList /> }

            <button onClick={()=>setShowproductList(false)}> disable products </button>
        </div>


    </div>
}