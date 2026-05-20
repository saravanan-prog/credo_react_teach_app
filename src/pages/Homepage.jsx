import React from 'react'
import CustomerList from './CustomerList'

export default function Homepage(){

    const canidatename = "Kirubha"

    const handleClick = (data) => {
        console.log("button is clicked ",data)
    }

    return <div>
         <h2> Parent Component  </h2>

         <CustomerList 
            canidatename = {canidatename}
            handleClick = {handleClick}
         />
    </div>
}