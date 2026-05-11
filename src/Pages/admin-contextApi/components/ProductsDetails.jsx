import { AdminContext } from "../../../core/context/gernalContext"
import { useContext } from "react"

export default function ProductDetails(){

    const {products} = useContext(AdminContext)

    console.log(products)

    return <div>
        
        <p>ProductDetails Component</p>
         
    </div>
}