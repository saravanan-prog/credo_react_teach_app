import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { productsList } from "./api-thunk"

export default function ProductPage(){

    const productList = useSelector((state)=> state.products.products)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(productsList())
    },[])

    
    return <div>
        <h1> Product Page </h1>
        { JSON.stringify(productList)}


    </div>
}