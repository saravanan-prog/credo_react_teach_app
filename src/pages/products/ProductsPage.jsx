import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { productsList } from "./api-thunk"

export default function ProductPage(){
  
    const loading = useSelector((state)=> state?.product?.loading)
    const error = useSelector((state)=> state?.product?.error)
    const productList = useSelector((state)=> state?.product?.data)
    useSelector((state)=> console.log(state))

    console.log("productList===>",productList)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(productsList())
    },[])

    
    return <div>
        <h1> Product Page </h1>
        {
            loading && <h1> Loading </h1>
        }
        {error  && <h1> error </h1>
        }
        {
           productList && JSON.stringify(productList) 
        }


    </div>
}