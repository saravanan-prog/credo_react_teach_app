import { React, useState } from "react";
import studentDetails from '../../asset/json/studentInfo.json'

export default function AddStudent() {
    const [students, setStudent] = useState(studentDetails)

    const addStudent = () => {

        let newRecord = {
            name : "vimal",
            age : 22,
            course : "Core Java"
        }


        setStudent( [...students,newRecord] )
    }

    return (
        <>
            <div>
                <center> <h1> Student Information System </h1> </center>
            </div>
            <div>
                <table border={2}>
                    <tr>
                        <th> Serial Number </th>
                        <th> Student Name </th>
                        <th> Picked Course </th>
                    </tr>

                    {students.map((value, index) => {
                        return <tr key={index}>
                            <td> {index + 1}  </td>
                            <td> {value.name}  </td>
                            <td> {value.course} </td>
                        </tr>
                    })}

                </table>
            </div>
            <div>
                <button onClick = {addStudent} >Add studnet </button>
            </div>
            
        </>
    )
}