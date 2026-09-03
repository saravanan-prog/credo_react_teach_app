import { useContext, useEffect } from "react"
import { DashboardContext } from "../../../context/globalStore"
import CustomerList from "./CustomerList"

export default function TotalCustomer(){
    
    const {data} = useContext(DashboardContext)
    const {customers} = data

    useEffect(()=>{
            console.log("customers=====>",customers)
    },[])

    return(
        <>
            <div>
                <h3> Total Customer - ( {customers.length} )  </h3>
                 <CustomerList />
                
            </div>
        </>
    )
}