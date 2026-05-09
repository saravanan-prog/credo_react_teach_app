import AdditinalInformation from "./components/AdditionalInfo"
import { useState } from "react"
export default function Student(){

     const [studentName,setstudentName] = useState("saravanan")
     const [studentAge,setstudentAge] = useState(27)
     const [studentclasType,setstudentclasType] = useState("CBSE")
     const [studentLocation,setstudentLocation] = useState("velachery")
     const [studentSkillset,setstudentSkillset] = useState(["React","Angular","NodeJs","Java"])
     const [academicResut,setacademicResut] = useState(
        {
           "firstSem" : "React-desitination", 
           "secondSem" : "Angular-first-class",
           "thridSem" : "Pursing-backend"
        }
     )

  return <div>

        <h3> Welcome to DAV Matriculation Hr. sec School </h3>
        <h5> Our Top performer Student </h5>
        <p> Studnet Name is : {studentName} </p>
        
        <AdditinalInformation  
           studentAge  = {studentAge}
           studentclasType = {studentclasType}
           studentLocation = {studentLocation}
           studentSkillset = {studentSkillset}
           academicResut = {academicResut}
        />

        

  </div>
}
