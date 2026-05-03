import React, { useState } from "react";
import studentinfo from '../asset/json/studentInfo.json'

export default function DemoPage5() {

  const [studentInfo, setStudentInfo] = useState(studentinfo)


  const addNewStudent = () => {
    setStudentInfo([
      ...studentInfo,
      {
        name: "Ramesh",
        age: 28,
        course: "Javascript",
      },
    ]);
  };

  const handleUpdate = (profileIndex) => {

    const updateInfo = studentInfo.map(

      (value, index) => {

        if (index == profileIndex) {
          value.name = "Taj"
          value.age = 22
          value.course = "vue Js"
        }

        return value
      }
    )

    setStudentInfo(updateInfo)

  }

  const handleDelete = (profileIndex) => {

    const afterDeleteRecord = studentInfo.filter((value, index) => index != profileIndex)
    setStudentInfo(afterDeleteRecord)

  }



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
              <button onClick={() => handleUpdate(index)}>update</button>
              <button onClick={() => handleDelete(index)}>delete</button>
              <hr />
            </React.Fragment>
          );
        })}
      </div>
      <button onClick={addNewStudent}> Add New Student </button>
    </div>
  );
}
