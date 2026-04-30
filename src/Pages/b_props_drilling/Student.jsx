import AdditinalInformation from "./components/AdditionalInfo"
export default function Student(){

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
