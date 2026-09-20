import { useState } from "react"

export default function Bchild( 
    {
        canidateName,
        candidatePhone,
        candidateEmail,
        candidateAddress : {
            temp: {
                area : permenant_area,   // alias name 
                city : permanent_city
            } = {}, 
            permanent:{
                area : temp_area,
                city : temp_city
            } = {}
        } = {}
    }
 ){
    
  

    return(
        <>
          <h3> Candidate Details</h3>

          <p> Canidate Name  : {canidateName} </p>
          <p> Canidate Email  : {candidateEmail} </p>
          <p> Canidate Phone   : {candidatePhone} </p>
          <p> Canidate temp Address : {permenant_area + ", " + permanent_city}  </p>
          <p> Canidate permanent Address : {temp_area + ", " + temp_city} </p>

        
        
        </>
    )
}