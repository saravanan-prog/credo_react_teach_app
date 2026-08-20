import { React, useState } from "react";
import studentDetails from '../../asset/json/studentInfo.json'

export default function DeleteStudent() {
    
    const [students, setStudent] = useState(studentDetails)

    const handleDelete = (profileIndex) => {

        const afterDeletedRecord = students.filter((vlaue,index)=> index != profileIndex)
        setStudent(afterDeletedRecord)
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
                                    <button onClick={() => handleDelete(index)}> Delete </button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}