import { useEffect, useState } from "react"
import ProductList from "./ProductList"

export default function Products(){
    
    const [products,setProducts] = useState([])

    useEffect(()=>{
        getProductList()
    },[])

    const getProductList = async()=> {
       let response = await  fetch("https://fakestoreapi.com/products")
       let data = await response.json()
       console.log("data===>",data)
       setProducts(data)
    }   


    return (
        <>
            <div>
               <ProductList products = {products} />
            </div>
        </>
    )
}