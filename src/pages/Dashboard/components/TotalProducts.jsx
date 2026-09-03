import { useContext } from "react"
import { DashboardContext } from "../../../context/globalStore"


export default function TotalProducts(){

    const { data } = useContext(DashboardContext)
    const { Products } = data

    return(
        <>
            <div>
                <h3> Total Products ({Products?.length}) </h3>
                
            </div>
            
        
        
        
        </>
    )
}