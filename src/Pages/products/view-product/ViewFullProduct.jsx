import { useState,useEffect } from "react"
import React from "react"

import { useParams } from "react-router-dom"

export default function ViewFullProduct(){

    const [products,setProducts] = useState()

    const {id} = useParams()

    

        useEffect(()=>{
          
          getPrdocuts()
        },[])
    
        const getPrdocuts = async () => {
            try{
                let response = await fetch(`https://fakestoreapi.com/products/${id}`)
                let responseData = await response.json()
                setProducts( [responseData] )
            }
            catch(error){
                console.error(error)
            }
        }

        return <div>
                
                <div className="card product-list">
                    {products && products.length != 0 ?
                        products.map((value,index) => {
        
                            return <React.Fragment key={index}>
                                
                                <img src={value?.image} height={50} width={50} />
                                <h5> {value?.title} </h5>
                                <p> Rs. {value.price}</p>

                                <div>{value?.description}</div>

                                <div>Ratings : {value?.rating?.rate}</div>
        
                                
                            </React.Fragment>
                        })
                
                        : <p>no products</p>
                    }
                </div>
            </div>
}