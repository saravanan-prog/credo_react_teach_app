import { useEffect, useState } from "react"
import React from "react"
import { Link } from "react-router-dom"

export default function ProductsPage(){
    const [products,setProducts] = useState()
    useEffect(()=>{
        getPrdocuts()
    },[])

    const getPrdocuts = async () => {
        try{
            let response = await fetch("https://fakestoreapi.com/products")
            let responseData = await response.json()
            console.log("responseData===>",responseData)
            setProducts(responseData)
        }
        catch(error){
            console.error(error)
        }
    }

    return <div>
        <h1>  Prdoucts </h1>
        <div className="card product-list">
            {products && products.length != 0 ?
                products.map((value,index) => {

                    return <React.Fragment key={index}>
                        
                        <img src={value?.image} height={50} width={50} />
                        <h5> {value?.title} </h5>
                        <p>price {value.price}</p>
                        <Link to = {`/viewproduct/${value?.id}`} > view full info</Link>
                        <hr/>
                    </React.Fragment>
                })
        
                : <p>no products</p>
            }
        </div>
    </div>
}