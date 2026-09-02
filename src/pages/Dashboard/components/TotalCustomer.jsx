import { useContext } from "react"
import { DashboardContext } from "../../../context/generalContext"
import CustomerList from "./CustomerList"

export default function TotalCustomer(){

    const dashboardState = useContext(DashboardContext)
    const {customers,develpedBy} = dashboardState.dashboard

    return(
        <>
            <div>
                <h3> Total Customer ({customers.length}) - {dashboardState.develpedBy} </h3>
                 <CustomerList />
                
            </div>
        </>
    )
}