import Exprience from "./Exprience";

export default function Education({ studentdetails }) {

    const { education, institution, academicYear } = studentdetails

    return (
        <>
            <div>
                <p> He is completed {education} in {institution} academic {academicYear}  </p>
            </div>

            <Exprience studentdetails={studentdetails} />

        </>
    )
}