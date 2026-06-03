
import { useParams,useLocation } from "react-router"

export default function ViewFullProduct(){

    const params    = useParams()
    const location  = useLocation()

    console.log("location====>",location)

    const searchParams = new URLSearchParams(location.search)
    const productId = searchParams.get('id')
    const productName  = searchParams.get('name')


    

    return <div>
        <p> View product Page </p>
        <p> Param Id -  {productId}</p>
        <p> Param name  -  {productName}</p>

    </div>
}