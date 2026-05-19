import React from 'react'

export default function CustomerList(
    {customer}
){

    console.log("props=======>",customer)

    return <div>
         <h4> Customer Names </h4>
         {customer.map((value,index) =>
            <p key={index}> {value?.customerName} - {value?.customerAge} - {value?.customerQualification} </p> 
         )}
    </div>
}