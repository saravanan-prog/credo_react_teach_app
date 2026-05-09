import React from "react"

export default function Skillset( {academicResut,studentSkillset} ){
    
   const {firstSem,secondSem,thridSem} = academicResut

  return <div>
        <h5> Student Skills </h5>
        <div>
          {studentSkillset.map((value,index)=>{
             return <React.Fragment>
                <p>{value}</p>
             </React.Fragment>
          })} 
        </div>
    </div>
}