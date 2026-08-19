import { useState } from "react";
import studentInfo from "../../assets/json/student.json";
import ListData from "./ListData";

export default function StudentMainpage() {
  const [studentData, setStudentdata] = useState(studentInfo);

  const handleUpdate = (updateIndex) => {
    const newStudentData = studentData.map((value, index) => {
      if (index == updateIndex) {
        value.name = "Mohamed";
        value.course = "JAVA Spring boot";
      }

      return value;
    });

    setStudentdata(newStudentData);
  };

  const handleDelete = (deleteIndex) => {
    const filteredData = studentData.filter(
      (value, index) => index != deleteIndex,
    );
    setStudentdata(filteredData);
  };

  return (
    <>
      <div className="title">
        <h1> React Props Callback </h1>
      </div>

      <ListData
        studentData={studentData}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </>
  );
}
