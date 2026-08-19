export default function Skills({ studentdetails }) {

    const { skills } = studentdetails

    return (
        <>
            <div>
                <h3>Skills</h3>
            </div>
            <div>
                <ul>
                    {skills.map((value, key) => <li key={key}>{value}</li>)}
                </ul>
            </div>

        </>
    )
}