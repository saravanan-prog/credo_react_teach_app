import React from 'react'

export default function CustomerList(
    { handleClick }
){

    const recipie = "biriyani"
   

    return <div>
         <h4>Child Component </h4>
         
         <button onClick = {()=>handleClick(recipie)} > click me </button>
    </div>
}