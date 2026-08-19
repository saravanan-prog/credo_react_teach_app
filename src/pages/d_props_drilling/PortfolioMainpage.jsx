import { useState } from "react";
import Education from "./child-components/Education";

export default function PortfolioMainpage(){

    const [skills,setSkills] = useState("React")


    return (
        <>
        
            <Education 
                skills = {skills}
            />
        
        </>
    )
}