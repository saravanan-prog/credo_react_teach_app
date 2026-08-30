import { useState } from "react"

export default function G_ReactObjectState(){

    const [employee,setEmployee] = useState(
        {
            empid: 1,
            empname:"saravanan",
            empdesignation: "software Developer"
        }
    )

    const modifynameField = () => {
        setEmployee( { ...employee, empname : "Nagaraj" } )
    }

    const modifyDesigination = () => {
        setEmployee( { ...employee, empdesignation:"Tester"} )
    }


    

    return (
        <>
          <div> <h2> Employee Detail </h2></div>
          <div>
            <p> Employee Name : {employee.empname} </p>
            <p> Employee Desigination : {employee.empdesignation} </p>
          </div>

          <div>
                <button  
                    onClick={ modifynameField } 
                > 
                    Modify your name
                </button>
                <button  
                    onClick={ modifyDesigination } 
                > 
                    Modify your Desigination
                </button>
          </div>
        </>
    )
}