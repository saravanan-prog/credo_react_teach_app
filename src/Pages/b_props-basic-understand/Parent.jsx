import Child from "./Child"
import { useState } from "react"

export default function Parent(){

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

        <h3> I am Parent Component </h3>
         <hr/> 
        <Child 
           studentname = {studentName}
           studentAge  = {studentAge}
           studentclasType = {studentclasType}
           studentLocation = {studentLocation}
           studentSkillset = {studentSkillset}
           academicResut = {academicResut}
        />



  </div>
}
