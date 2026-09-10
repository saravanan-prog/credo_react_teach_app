import { useEffect, useState } from "react"

export default function ProductList( {products} ){
    
console.log("products====>",products)


    return (
        <>
            <div>
               {products.map((value,index)=>{
                   return (
                      <div key={index}>
                         <p>Product Name {value.title}</p>
                        <p>Product Price {value.price}</p>
                           <hr/>
                      </div>
                     
                   )
               })}
            </div>
        </>
    )
}
