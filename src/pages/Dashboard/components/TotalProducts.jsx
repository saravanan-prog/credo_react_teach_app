import { useContext } from "react"
import { DashboardContext } from "../../../context/generalContext"


export default function TotalProducts(){

    const dashboardData = useContext(DashboardContext)
    const {Products} = dashboardData.dashboard

    return(
        <>
            <div>
                <h3> Total Products ({Products?.length}) </h3>
                
            </div>
            
        
        
        
        </>
    )
}