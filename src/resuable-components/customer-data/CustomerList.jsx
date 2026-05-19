export default function CustomerList(){

    const customerdata = [
        {
            customerName: "vignesh",
            customerEmail : "vignesh@gmail.com",
            coustomerContact : "12345678900"
        },
        {
            customerName: "Saravanna",
            customerEmail : "saravanan@gmail.com",
            coustomerContact : "12345678900"
        },
        {
            customerName: "kirubhakaran",
            customerEmail : "saravanan@gmail.com",
            coustomerContact : "12345678900"
        }
    ]

    const tableStyle ={
        border:"2px solid black"
    }

    return <div>
        <table style={tableStyle}>
            <thead>
                <tr>
                    <th> Sno </th>
                    <th> Customer Name </th>
                    <th> Customer Email </th>
                    <th> Customer Contact </th>
                </tr>
            </thead>
            <tbody>
                {customerdata.map((value,index) => {
                    return <tr key={index}>
                        <td> {index + 1} </td>
                        <td> {value?.customerName} </td>
                        <td>  {value?.customerEmail} </td>
                        <td>{value?.coustomerContact} </td>
                    </tr>
                })}
            </tbody>
            
        </table>
    </div>
}