import { useState } from "react"
import employeeData from '../../asset/json/employee.json'

export default function DemoPage4() {


    const [employeeInfo, setEmployeeInfo] = useState(employeeData)
    
   

    return <div>
        <div>
            <h4> Employee Address </h4>

            <div>
                <span><strong>Employee name : </strong></span>
                <span> {employeeInfo?.name} </span>
            </div>
            <div>
                 <span> <strong> Street:</strong> </span>
                <span> {employeeInfo.address.street} </span>
                <span> <button
                    onClick = {
                        () => setEmployeeInfo({
                            ...employeeInfo,
                            address:{
                                ...employeeInfo.address,
                                street: "2nd cross st"
                            }
                        })
                    }
                
                > Update street </button></span>
            </div>
            <div>
                <span> <strong> Area: </strong></span>
                <span> {employeeInfo.address.area} </span>
                <span> <button
                    onClick = {
                        () => setEmployeeInfo({
                            ...employeeInfo,
                            address:{
                                ...employeeInfo.address,
                                area: "pallikaranai"
                            }
                        })
                    }
                
                > Update area </button></span>
            </div>
           
        </div>  
    </div>
}