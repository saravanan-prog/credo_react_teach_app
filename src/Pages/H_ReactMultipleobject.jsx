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

    const addEmployee = () => {

        let record = {
            empid: 4,
            empname:"vimal",
            empdesignation: "Trainee"
        }
        setEmployees([...employees,record])

    }

    return (
        <>
          <div> <h2> Employee Detail </h2></div>
          <div>
            {employees.map((value,index)=>{
                return <>
                    <p>  id  : {index + 1} </p>
                    <p> Employee Name : {value.empname} </p>
                    <p> Employee Desigination : {value.empdesignation} </p>
                    <hr/>
                </>
            })}
            <button onClick = {addEmployee}> Add Employee </button>
          </div>

        </>
    )
}