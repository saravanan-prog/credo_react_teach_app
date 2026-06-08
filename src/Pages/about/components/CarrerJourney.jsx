import { AboutContext } from "../../../core/context/contextStore"
import { useContext } from "react"

export default function CarrerJourney(){

    const { careers } = useContext(AboutContext)
    
    return <div>
        <h3> Carrer Journey </h3>
        <div>
            <h5> In 2022 </h5>
            <blockquote> {careers['2022']} </blockquote>

            <h5> In 2023  </h5>
             <blockquote>{careers['2023']}</blockquote>
            
            
            <h5> In 2024  </h5>
             <blockquote>{careers['2024']}</blockquote>

            
            <h5> In 2025  </h5>
             <blockquote>{careers['2025']}</blockquote>

            
            <h5> In 2026  </h5>
             <blockquote>{careers['2026']}</blockquote>
        </div>
    
    </div>
}