import React from "react";

export default function DemoPage6() {
  const employee = [
    {
      name: "saravanan",
      age: 27,
      work: "Tata consultancy services",
      location: "Chennai",
    },
    {
      name: "kamla",
      age: 26,
      work: "CTS",
      location: "Bangalore",
    },
    {
      name: "Nirosha",
      age: 24,
      work: "Tech-mahindra",
      location: "Hyderabhad",
    },
  ];

  return (
    <div>
      <div className="title"><h2>Employee Information </h2></div>
      <div className="employee-List">
        {employee && employee.length != 0 ?
        
          employee.map((value, index) => {
            return <div key={index}>
              <p> Employee name : {value?.name} </p>
              <p> Employee age : {value?.age} </p>
              <p> Employee work : {value?.work} </p>
              <p> Employee location : {value?.location} </p>
              <hr />
            </div>
          })

          : "No Employee Found"

        }
      </div>
    </div>
  );
}
