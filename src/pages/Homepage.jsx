import React, { useState } from 'react'
import CustomerList from './CustomerList'

export default function Homepage(){

    const [candidateName ,setCandidateName] = useState("saravanan")
    const [skillset,setSkillset] = useState(["React","Angular","node","vuejs"])
    const [experinece,setExperience] = useState(
        {
            "2022":"Tcs",
            "2023" : "CTS",
            "2024" : "Techmanindra"
        }
    )
   

    return <div>
         <h2> Home Page  </h2>
        <p> Canidate Name : {candidateName} </p>
        <h3> Skill set </h3>
        {skillset.map((value,index)=> <p> {value} </p>)}
    </div>
}