import { useState } from "react"

export default function G_ReactObjectState(){

    const [employee,setEmployee] = useState(
        {
            empid: 1,
            empname:"saravanan",
            empdesignation: "software Developer"
        }
    )


    

    return (
        <>
          <div> <h2> Employee Detail </h2></div>
          <div>
            <p> Employee Name : {employee.empname} </p>
            <p> Employee Desigination : {employee.empdesignation} </p>
          </div>

          <div>
                <button onClick={ () => setEmployee({...employee,empname:"vinoth"})} > Change Name </button>
                <button  onClick={ () => setEmployee({...employee,empdesignation:"tester"})} > Change Desigination</button>
          </div>
        </>
    )
}