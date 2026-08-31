import { useState,useEffect } from "react"
import { Link, useParams } from "react-router"


export default function Products(){
    const [product,setProducts] =useState([])

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
            <div> <h4> Products </h4></div>
            <div className="d-flex gap-5 flex-wrap p-3">
                {product.map((value,index) => {
                    return (
                        <div className="card" style={{width:"300px"}}>
                            <div className="card-header">
                                 <img src = {value.image} height={100} width={100}/>
                            </div>
                            <div className="card-body">
                                 <p>{value.title}</p>
                            </div>
                            <div className="card-footer">
                                 <Link to = {`../products/viewdetails/${value.id}`}>View more Info</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        
        
        </>
    )
}