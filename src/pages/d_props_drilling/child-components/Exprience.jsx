import Skills from "./Skills";

export default function Exprience({ studentdetails }) {

    const { exprience } = studentdetails

    return (
        <>
            <div>
                <h3> Exprience </h3>
                <p> He currently has {exprience}  years of experience in Full-stack development</p>
            </div>
            <div>
                <Skills
                    studentdetails={studentdetails}
                />
            </div>

        </>
    )
}