import { React, useState } from "react";
import studentDetails from '../../asset/json/studentInfo.json'

export default function UpdateStudent() {
    
    const [students, setStudent] = useState(studentDetails)

    const handleUpdate = (profileIndex) => {

        const upadtedRecord = students.map(
            (value, index) => {
                if (index === profileIndex) {
                    value.name = "Vimal"
                    value.course = "Core java"
                }

                return value
            }
        )
        setStudent(upadtedRecord)
    }

    return (
        <>
            <div>
                <center> <h1> Student Information System </h1> </center>
            </div>
            <div>
                <table border={2}>
                    <thead>
                        <tr>
                            <th> Serial Number </th>
                            <th> Student Name </th>
                            <th> Picked Course </th>
                            <th> Actions </th>
                        </tr>
                    </thead>

                    <tbody>
                        {students.map((value, index) => {
                            return <tr key={index}>
                                <td> {index + 1}  </td>
                                <td> {value.name}  </td>
                                <td> {value.course} </td>
                                <td>
                                    <button onClick={() => handleUpdate(index)}> Update </button>

                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}