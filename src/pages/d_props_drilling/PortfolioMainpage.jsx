import { useState } from "react";
import Education from "./child-components/Education";

export default function PortfolioMainpage() {

    const [student, setStudent] = useState({

        name: "saravanan",
        age: 28,
        education: "Master of Computer Application",
        academicYear: "2023-2026",
        institution: "Anna university",
        exprience: 10,
        skills: ["React", "Angular", "NodeJS", "Python"]

    })


    return (
        <>
            <div>
                <h2> <center> PortFolio Site </center></h2>
            </div>
            <div>
                <h3>Student Basic Details </h3>
                <p> Name :  {student.name} </p>
                <p> Age  :  {student.age} </p>
            </div>

            <div>
                <h3>Student Education Details </h3>
                <Education
                    studentdetails={student}
                />
            </div>

        </>
    )
}