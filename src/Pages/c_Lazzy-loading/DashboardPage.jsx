import { lazy,Suspense } from "react";


import ProfileInfo from "./components/ProfileInfo";

const Customers = lazy(()=> import("./components/Customers"))
const Prodcuts  = lazy(()=> import("./components/Products"))




export default function DashboardPage(){
    

    return (
        <>
            <div>
                <h3> Dashboard Page </h3>
            </div>

            <div className="my-profile">
                <ProfileInfo />
            </div>
            <Suspense fallback = { <h3> Customer List fetching... </h3>}> 
                <div className="our-customers">
                    <Customers />
                </div>
            </Suspense>
            
             <Suspense fallback = { <h3> product List fetching... </h3>}> 
                <div className="our-products">
                    <Prodcuts />
                </div>
            </Suspense>
        
        
        
        </>
    )
}