import { useContext } from "react"
import { DashboardContext } from "../../../context/globalStore"
import TotalProducts from "./TotalProducts"

export default function CustomerList(){

    const {data} = useContext(DashboardContext)
    const {customers} = data
   

    return(
        <>
            
            <div>
                {customers.map(
                    (value,index) => {
                        return(
                            <div>
                                <span>{value.name}</span>
                                 <span>{value.email}</span>
                            </div>
                        )
                    }
                )}
            </div>
            
            <TotalProducts />
        
        
        </>
    )
}