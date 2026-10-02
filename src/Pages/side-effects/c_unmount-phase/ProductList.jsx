import { useEffect, useState } from "react"

export default function ProductList(){

    const [products,setProduct] = useState(
        {
            productName:"apple",
            productPrice : 200
        }
    )

    useEffect(()=>{
       
      return(
        () => {
            console.log("Unmount phase is calling...")
            setProduct({})
        }
      )

    },[])
    


    return(
        <>
            <div>
                <p> Product Name  :  {products.productName} </p>
                <p> Product Price :  {products.productPrice} </p>
            </div>
        </>
    )
}