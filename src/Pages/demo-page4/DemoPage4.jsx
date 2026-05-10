import { useState } from "react"
import employeeData from '../../asset/json/employee.json'

export default function DemoPage4() {


    const [employeeInfo, setEmployeeInfo] = useState(employeeData)
    
    const bulkUpdate = () => {

        setEmployeeInfo({
           
            name: "kamalesh",
            age: 32,
            work: "Tech-mahi",
            location: "Hyderabhad",
            address: {
                street: "4rth corss st"
            }

        })

    }

    return <div>
        <div className="employee-List">

            <h2>Employee Information </h2>
            <div>
                <p> Employee Name : {employeeInfo?.name} </p>
                <button onClick={() => setEmployeeInfo({ ...employeeInfo, name: "Ramesh" })}>update Name </button>
            </div>



            <div>
                <p> Employee Age : {employeeInfo?.age} </p>
                <button onClick={() => setEmployeeInfo({...employeeInfo, age: 35 })}>Update age </button>
            </div>

            <div>
                <p> Employee work : {employeeInfo?.work} </p>
                <button
                    onClick={() => setEmployeeInfo({...employeeInfo,  work: "CTS"})}>update work </button>
            </div>


            <div>
                <p> Employee location : {employeeInfo?.location} </p>
                <button onClick={
                    () => setEmployeeInfo(
                        {
                           ...employeeInfo,
                            location: "Banglore"
                        }
                    )}
                >update work </button>
            </div>



            <div>
                <p> Employee streetName : {employeeInfo?.address?.street} </p>
                <button
                    onClick={() => setEmployeeInfo(
                        {
                            ...employeeInfo,
                            address: {
                                street: "2nd crosss st"
                            }
                        }
                    )}
                >   update Street</button>
            </div>
        </div>
        
        <div>
            <button onClick={bulkUpdate}> Bulk update </button>
        </div>
    </div>
}