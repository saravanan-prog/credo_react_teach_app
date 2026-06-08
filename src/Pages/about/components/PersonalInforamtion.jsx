import CarrerJourney from "./CarrerJourney"
import { AboutContext } from "../../../core/context/contextStore"
import { useContext } from "react"


export default function PersonalInforamtion(){

    const {personalInformation} = useContext(AboutContext)
    
    return <div>
        <h3> Personal Information </h3>
        <div>
            {personalInformation}
        </div>
        <div>
             <CarrerJourney />
        </div>
       
    </div>
}