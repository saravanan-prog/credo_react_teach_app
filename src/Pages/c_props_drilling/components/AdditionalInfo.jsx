import Skillset from "./Skillset"

export default function AdditinalInformation( 
  { 
    studentname,
    studentAge,
    studentclasType,
    studentLocation,
    studentSkillset,
    academicResut

  }
){

  return <div>
      <p> Student Age : {studentAge} </p>
      <p> Student Location : {studentLocation} </p>
      <Skillset 
          studentSkillset = {studentSkillset}
          academicResut = {academicResut}
      />
  </div>
}

