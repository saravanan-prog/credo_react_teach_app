import { useCallback, useState } from "react"
import Prodcuts from "./components/Products"

export default function DashboardPage(){

    const [order,setOrders] = useState(25)
    
    const somethingFunction = useCallback(() => {
        console.log("something happen")
    },[])


    return <div>
        <h1>Dashboard Page</h1>
        <div className ="orders">
            <p> Current Order { order } </p>
            <button onClick = {()=>setOrders(order + 1)}> Increase Order </button>
        </div>

        <div className="Prodcts-list">
            <Prodcuts  somethingFunction = {somethingFunction} />
        </div>
    </div>
}