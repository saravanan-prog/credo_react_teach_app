import TotalCustomer from "./components/TotalCustomer";
import TotalProducts from "./components/TotalProducts";
import DashboardResponse from '../../json/dashboardResponse.json'
import { useState } from "react";
import { DashboardContext } from "../../context/generalContext";

export default function DashboardMain(){

    const [dashboardData,setDashboardData] = useState(DashboardResponse)
    const [develpedBy,setDevloperby] = useState("Power India corporation")


    return(
        <>
            <div>
                <h3> Dashboard </h3>
            </div>

            <div>
                <DashboardContext.Provider  value = {
                     {
                        'dashboard' : dashboardData,
                        "develpedBy" : develpedBy
                     } 
                }
                     
                >
                    <TotalProducts />
                    <TotalCustomer />
                </DashboardContext.Provider>
               
            </div>
        
        
        
        </>
    )
}