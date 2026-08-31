import { useState,useEffect } from "react"
import { Link, useParams } from "react-router"


export default function ViewDetails(){
    const [product,setProducts] =useState([])

    const { id,name } = useParams()

   useEffect(()=>{
        if(id)
          getProducts(`https://fakestoreapi.com/products/${id}`)
        else if(name)
           getProducts(`https://fakestoreapi.com/products/${id}`)
        else
            getProducts(`https://fakestoreapi.com/products/${id}/${name}`)
       
   },[])

   const getProducts = async (url) => {
        let response = await fetch(url)
        let respData = await response.json()
        respData && setProducts([respData])


   }

    return (
        <>
            <div> <h4> Products </h4></div>
            <div>
                {product.map((value,index) => {
                    return (
                        <div>
                            <img src = {value.image} height={100} width={100}/>
                            <p> Product Name : {value.title}</p>
                            <p>Description : {value.description}</p>
                             <p>Ratings :    {value.rating.rate}</p>
                        </div>
                    )
                })}
            </div>
        
        
        </>
    )
}