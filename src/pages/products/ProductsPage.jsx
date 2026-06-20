import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { productList } from "./api-thunk"
import { Link } from "react-router"

export default function ProductPage(){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(productList())
    },[])

    const {loading,error,data} = useSelector((state) =>state.productReducer)

    return <div>
         <h1> Product List Page </h1>
         {loading && <h2>Loading....</h2>}
         {error  && error}
         {(!error && data) && JSON.stringify(data)}

         <Link to={'/dashboard'}> Go to dashboard </Link>
    </div>
    
}