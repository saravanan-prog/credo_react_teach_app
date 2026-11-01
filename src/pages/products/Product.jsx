import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { getProduct } from './product-api-thunk.js'


export default function Products(){
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProduct())
        
    },[])
    useSelector((state)=> console.log(state?.products))
    const {loading,error,data} = useSelector((state)=> state?.products)
   

    // const productList = async () =>  setProducts( await fetchApi("/products","get") )
       
    

    return(
        <>
            <div className="container">
                <div className="h1">Products Page</div>
                {loading &&(
                    <p> Loading....</p>
                )}
                {error &&(
                    <p> something went error ....</p>
                )}
                {data &&(
                    <div>
                        {JSON.stringify(data)}
                    </div>
                )}
                
                
            </div>
        
        </>
    )
}