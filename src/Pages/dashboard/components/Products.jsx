import { useState,useEffect } from "react"
import api from "../../../core/api/api"
import { memo } from "react"




export default memo(function Prodcuts(){


    console.log("child componet is rendering....")

    const [productsList,setproductsList] = useState(null)

    useEffect(()=>{
        const getProductsList = async() => {
            try{
                let response = await api.get("/products")
                setproductsList(response?.data)
            }
            catch(error){
                throw new Error("Something went wrong !!!!")
            }
            
        }

        getProductsList()
    },[])


    return <div>
        <h1>Product list</h1>
        {JSON.stringify(productsList)}
    </div>
})