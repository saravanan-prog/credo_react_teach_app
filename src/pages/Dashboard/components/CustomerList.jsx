import { useContext } from "react"
import { DashboardContext } from "../../../context/generalContext"

export default function CustomerList(){

    const dashboardState = useContext(DashboardContext)
    const {customers} = dashboardState.dashboard

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
            
        
        
        
        </>
    )
}