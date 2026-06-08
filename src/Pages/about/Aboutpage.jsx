
import { useEffect,useState } from "react"
import styles from './css/aboutpage.module.css'
import PersonalInforamtion from "./components/PersonalInforamtion"
import { AboutContext } from "../../core/context/contextStore"


export default function AboutPage(){

    const personalInformation = `I am a JavaScript developer with experience
            building responsive web applications using
            React, Next.js, and Node.js.
            Currently expanding my skills in AI and
            Machine Learning to build intelligent
            applications.
    `


    const careerJourney = {
        "2022" : "Started JavaScript",
        "2023" :" Built Full Stack Projects",
        "2024" : "Learned React & Next.js",
        "2025" : "Started AI Learning",
        "2026" : "Building AI-powered Applications"
    }



    
    return <div>
         <p> About page </p>
        <div>
            <AboutContext.Provider value={
                {
                    "personalInformation":personalInformation,
                    "careers" :careerJourney
                }
            }>
                <PersonalInforamtion />
            </AboutContext.Provider>
        </div>
    </div>
}