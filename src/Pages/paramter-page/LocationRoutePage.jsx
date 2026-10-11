import { useEffect } from "react"
import { useLocation } from "react-router"


export default function LocationRoutePage(){

    const location = useLocation()
    
    const queryParams = new URLSearchParams(location.search)
    const customerId = queryParams.get("customer-Id")
    const customerName = queryParams.get("customername")


    useEffect(()=>{
        
    },[])

    return (
        <div>
            <h3> Customers Page </h3>
            <p> Customer ID : {customerId}</p>
            <p> Customer Name : {customerName}</p>
        </div>
    )
}