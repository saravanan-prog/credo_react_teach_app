import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { productsList } from "./api-thunk"

export default function ProductPage(){
  
    

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(productsList())
    },[])
    
    useSelector((state)=> console.log("State====>",state))
    const loading = useSelector((state)=> state?.products?.loading)
    const error = useSelector((state)=> state?.products?.error)
    const productList = useSelector((state)=> state?.products?.data)


    console.log("productList===>",productList)

    
    return <div>
        <h1> Product Page </h1>
        {
            loading && <h1> Loading... </h1>
        }
        {error  && <h1> error </h1>
        }
        {
           productList && JSON.stringify(productList) 
        }


    </div>
}