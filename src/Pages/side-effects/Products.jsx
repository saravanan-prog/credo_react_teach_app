import {  useEffect, useState } from "react"

export default function Products(){

    const[product,setProduct] = useState()
    const[productID,setProductId] = useState(1)
   
    useEffect(()=>{
        const id = productID == 0 ? 1 : productID
        getProduct(id)
    },[productID])

    const getProduct = async (productId) => {
        let response      =  await fetch(`https://fakestoreapi.com/products/${productId}`)
        let responseData  = await response.json()
        responseData && ( setProduct(responseData))
    }


    return <div>
        
            <div>
                <img src={product?.image} height={50} width={50} />
                <p> product name  : {product?.title} </p>
                <p> product Price  : {product?.price} </p>
            </div>

            <button 
                onClick={()=>setProductId(  productID - 1)}
                disabled = {productID == 0 ? true : false }
                >Previous </button>
            <button onClick={()=>setProductId(   productID + 1 )}> Next </button>


    </div>
}