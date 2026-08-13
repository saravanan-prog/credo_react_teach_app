import { useState } from "react"

export default function H_ReactMultipleobject(){

    const [employees,setEmployees] = useState(
        [ 
            {
                empid: 1,
                empname:"saravanan",
                empdesignation: "software Developer"
            },
            {
                empid: 2,
                empname:"Rajesh",
                empdesignation: "software Tester"
            },
            {
                empid: 3,
                empname:"Kumar",
                empdesignation: "Business Admin"
            }
        ]
    )

    return (
        <>
          <div> <h2> Employee Detail </h2></div>
          <div>
            {employees.map((value,index)=>{
                return <>
                    <p> Employee Name : {value.empid} </p>
                    <p> Employee Desigination : {value.empdesignation} </p>
                </>
            })}
          </div>
        </>
    )
}