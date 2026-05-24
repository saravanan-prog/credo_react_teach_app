import { useContext } from "react"
import { DashboardContext } from "../../../core/context/genralContext"
import { BasicPagesettingcontext } from "../../../core/context/genralContext"

export default function ComponentD(){

    const data = useContext(DashboardContext)
    const basicPageSetup = useContext(BasicPagesettingcontext)

    console.log("data====>",data,"basicPageSetup===>",basicPageSetup)


    return <div>
         <p> ComponentD </p>
    </div>

}