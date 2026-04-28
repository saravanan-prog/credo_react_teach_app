import React from "react";

export default function DemoPage5() {
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
      <div className="employee-List">
        <h2>Employee Information </h2>
        {employee.map((value, index) => {
          return (
            <React.Fragment key={index}>
              <p> Employee Name : {value?.name} </p>
              <p> Employee Age : {value?.age} </p>
              <p> Employee work : {value?.work} </p>
              <p> Employee location : {value?.location} </p>
              <p> Employee streetName : {value?.address?.street} </p>
              <hr />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
