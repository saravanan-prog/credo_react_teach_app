import React from 'react'
import CustomerList from './CustomerList'

export default function Homepage(){

    const customerName = "saravanan"
    const customerAge = 27
    const customerQualification = "MCA"


    const customer = [
        {
        
            customerName :  "saravanan",
            customerAge : 27,
            customerQualification : "MCA"
        } ,
        {
        
            customerName :  "Kiruba karan",
            customerAge : 23,
            customerQualification : "Maths"
        } ,
         {
        
            customerName :  "abinaya",
            customerAge : 22,
            customerQualification : "B.tech"
        } 
    ]

    return <div>
         <h2> Home Page </h2>

         <CustomerList 
            customerName = {customerName}
            customerAge = {customerAge}
            customerQualification= {customerQualification}
            customer = {customer}
         />
    </div>
}