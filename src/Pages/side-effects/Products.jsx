import {  useEffect, useState } from "react"

export default function Products(){

    const[productList,setProductList] = useState()
    const [page,setPage] = useState(1)

    useEffect(()=>{
         
        getApicall()

    },[page])




    const getApicall = async () =>{
        let response = await fetch(`https://fakestoreapi.com/products/${page}`)
        let responseData = await response.json()
        setProductList(responseData)
    }


   


    return <div>
         <h3> Product List </h3>
         <div>
            <img src = {productList?.image} height={100} width={100} />

            <p> <strong> Product name :</strong> {productList?.title}</p>
            <p> <strong>Product price : </strong> {productList?.price}</p>

            <div>
                 <button
                     disabled = { page == 1 }
                     onClick = {()=>setPage( page - 1 )}> Prev </button>
                <button onClick = {()=>setPage( page + 1 )}> Next </button>
            </div>
         </div>
    </div>
}