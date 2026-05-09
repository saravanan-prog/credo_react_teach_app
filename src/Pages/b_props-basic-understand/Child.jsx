export default function Child( 
  { 
    studentname,
    studentAge,
    studentclasType,
    studentLocation,
    studentSkillset,
    academicResut

  }
){

  const {firstSem,secondSem,thridSem} = academicResut


  return <div>
      <h3> I am Child Component </h3>
      <p> Student Name : {studentname} </p>
      <p> Student Age : {studentAge} </p>
      <p> Student Location : {studentLocation} </p>

      <h3>Primar skill set</h3>
        {studentSkillset.map((value,index) => <p key={index}>{value} </p>)}

      <h4> Acadmeic Courses:</h4>
        <p>{firstSem} </p>
         <p>{secondSem} </p>
         <p>{thridSem} </p>
  </div>
}