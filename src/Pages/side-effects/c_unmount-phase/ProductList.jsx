import { useEffect, useState } from "react"

export default function ProductList(){

    const [products,setProduct] = useState()

    useEffect(()=>{
        const mycontroller = new AbortController()
        getPrdouctApi(mycontroller)

      return(
        () => {
            console.log("Unmount phase is calling...")
            mycontroller.abort()
        }
      )

    },[])
    
    const getPrdouctApi = (mycontroller) => {
        
        fetch("https://fakestoreapi.com/products",{signal:mycontroller.signal})
        .then(response => response.json())
        .then(data => setProduct(data) )
        .catch((error) => {
            if(error.name === "AbortError")
                console.log("API Aborted")
            else 
                console.log("Something went wrong")
        })

    }


    return(
        <>
        
             <div>
                {JSON.stringify(products)}
            </div>

        
        
        </>
    )
}