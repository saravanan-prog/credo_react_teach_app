import { React, useState } from "react";
import studentDetails from '../../asset/json/studentInfo.json'

export default function SearchStudent() {
    
    const [students, setStudents]   = useState(studentDetails)
    const [searchByValue,setSearchByValue] = useState(null)

    const handleSearch = () => {

        const searchValue = searchByValue.trim().toLowerCase();

        if (searchValue === "") {
            setStudents(studentDetails);
            return;
        }

        const filteredRecord = studentDetails.filter((student) => {

            return (
                student.name.toLowerCase() === searchValue ||
                student.course.toLowerCase() === searchValue
            );

        });

        setStudents(filteredRecord);
    }

    return (
        <>
            <div>
                <center> <h1> Student Information System </h1> </center>
            </div>
            <div>
                <input type="text" name="search" onChange ={(event)=>setSearchByValue(event.target.value)} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                <table border={2}>
                    <thead>
                        <tr>
                            <th> Serial Number </th>
                            <th> Student Name </th>
                            <th> Picked Course </th>
                           
                        </tr>
                    </thead>

                    <tbody>
                        {students.map((value, index) => {
                            return <tr key={index}>
                                <td> {index + 1}  </td>
                                <td> {value.name}  </td>
                                <td> {value.course} </td>
                                
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}