import { useState } from "react";
import ComponentA from "./components/ComponentA";

import { DashboardContext } from "../../core/context/genralContext";


export default function HomePage(){

    const dashboardData = {
        customerCount : 100,
        totalProduct : 80,
        soldout:20,
        return : 5,
        refund : 2
    }

      const adminDetails = {
        adminName : "saravanan",
        adminRole : "A"
    }



    return <div>
         <h1> Home Page </h1>

         <div>
            <DashboardContext.Provider value = { {"dashboardData":dashboardData , "adminDetails":adminDetails} } >
                <ComponentA />
            </DashboardContext.Provider>
            
         </div>
    </div>

}