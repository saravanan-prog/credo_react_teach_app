import Skillset from "./Skillset"

export default function AdditinalInformation( 
  { 
    
    studentAge,
    studentLocation,
    studentSkillset,
    

  }
){

  return <div>
      <p> Student Age : {studentAge} </p>
      <p> Student Location : {studentLocation} </p>
      <Skillset 
          studentSkillset = {studentSkillset}
          
      />
  </div>
}

