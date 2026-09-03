import TotalCustomer from "./components/TotalCustomer";
import TotalProducts from "./components/TotalProducts";
import DashboardResponse from '../../json/dashboardResponse.json'
import { useState } from "react";

import { DashboardContext } from "../../context/globalStore";

export default function DashboardMain(){

    const [dashboardData,setDashboardData] = useState(DashboardResponse)
    


    return(
        <>
            <div>
                <h3> Dashboard </h3>
            </div>

            <div>
                <DashboardContext.Provider value={{ "data" : dashboardData }}>
                    <TotalCustomer />
                </DashboardContext.Provider>
        
            </div>
        </>
    )
}