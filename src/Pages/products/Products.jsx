import { useState,useEffect } from "react"
import { useParams } from "react-router"


export default function Products(){
    const [product,setProducts] =useState()

    const {id,name} = useParams()

   useEffect(()=>{
       
        if(id)
            getProducts(`https://fakestoreapi.com/products/${id}`)
        else
            getProducts("https://fakestoreapi.com/products")
   },[])

   const getProducts = async (url) => {
        let response = await fetch(url)
        let respData = await response.json()
        respData && setProducts(respData)


   }

    return (
        <>
            <div>
                <h4> Products </h4>
                 {JSON.stringify(product)}
         
            </div>
        
        
        </>
    )
}