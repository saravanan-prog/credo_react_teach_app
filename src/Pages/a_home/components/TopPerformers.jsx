import React from "react";
import profileImage from "../../../assets/profiles/ajith1.jpg";

export default function TopPerformers() {
  const topstudentList = [
    {
      name: "saravanan",
      age: 27,
      course: "Fullstack",
      academic: 2026,
      pic: profileImage,
    },
  ];

  return (
    <div>
      <div> Top Peformers </div>
      {topstudentList.map((value, index) => {
        return (
          <React.Fragment>
            <div className="top-performers">
              <img src={value?.pic} width={100} height={100} />

              <p>{value?.name}</p>
              <p>{value?.age}</p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
