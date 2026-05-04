import React, { useState } from "react";
import studentinfo from '../../asset/json/studentInfo.json'
import { addNewStudent,handleUpdate,handleDelete } from "./demoPage6-action";

export default function DemoPage6() {

  const [studentInfo, setStudentInfo] = useState(studentinfo)

  return (
    <div>
      <div className="employee-List">
        <h2>Student Information </h2>
        {studentInfo.map((value, index) => {
          return (
            <React.Fragment key={index}>
              <p> Student Name : {value?.name} </p>
              <p> Student Age : {value?.age} </p>
              <p> Student course : {value?.course} </p>
              <button onClick={() => handleUpdate(index,  studentInfo,setStudentInfo)}>update</button>
              <button onClick={() => handleDelete(index, studentInfo,setStudentInfo)}>delete</button>
              <hr />
            </React.Fragment>
          );
        })}
      </div>
      <button onClick={() => addNewStudent(studentInfo,setStudentInfo)}> Add New Student </button>
    </div>
  );
}
