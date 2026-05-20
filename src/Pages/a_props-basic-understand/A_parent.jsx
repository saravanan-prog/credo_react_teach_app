import B_child from "./B_child"

export default function A_parent(){

  const studentName = "saravanan"
  const studentAge = 27
  const studentclasType = "CBSE"
  const studentLocation = "velachery"
  const studentSkillset = ["React","Angular","NodeJs","Java"]
  const academicResut = {
     "firstSem" : "React-desitination", 
     "secondSem" : "Angular-first-class",
     "thridSem" : "Pursing-backend"
  }


  return <div>

        <h3> I am Parent Component </h3>
         <hr/> 
        <B_child 
           studentname = {studentName}
           studentAge  = {studentAge}
           studentclasType = {studentclasType}
           studentLocation = {studentLocation}
           studentSkillset = {studentSkillset}
           academicResut = {academicResut}
        />



  </div>
}
