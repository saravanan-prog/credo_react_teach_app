import AdditinalInformation from "./components/AdditionalInfo"
export default function School(){

  const studentName = "saravanan"
  const studentAge = 27
  const studentclasType = "CBSE"
  const studentLocation = "velachery"
  const studentSkillset = [
      {
         year : 2022,
         skillset : "React",
         Result : "Excellent"
      },
      {
         year : 2024,
         skillset : "Angular",
         Result : "Good"
      },
      {
         year : 2025,
         skillset : "Next Js",
         Result : "Very Excellent "
      },
         {
         year : 2026,
         skillset : "Full stack",
         Result : "Processing"
      }

  ]
 


  return <div>

        <h3> Welcome to DAV Matriculation Hr. sec School </h3>
        <h5> Our Top performer Student </h5>
        <p> Studnet Name is : {studentName} </p>
        

        <AdditinalInformation  
           studentAge  = {studentAge}
           studentclasType = {studentclasType}
           studentLocation = {studentLocation}
           studentSkillset = {studentSkillset}
           
        />

        

  </div>
}
