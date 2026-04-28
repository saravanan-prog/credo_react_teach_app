export default function DemoPage4(){

    const employee = {
        name : "saravanan",
        age : 27,
        work:"Tata consultancy services",
        location : "Chennai"

    }


    return <div>
        <div className="employee-List">
            <h2>Employee Information </h2>
            <p> Employee Name : {employee?.name} </p>
            <p> Employee Age : {employee?.age} </p>
            <p> Employee work : {employee?.work} </p>
            <p> Employee location : {employee?.location} </p>
            <p> Employee streetName : {employee?.address?.street} </p>
        </div>
    </div>
}