import { useState } from "react";

export default function DemoPage1() {

  const [canidateName, setCanidateName] = useState("Saravanan Durai")
  const [candidateAge, setcandidateAge] = useState(27)
  const [score, setScore] = useState(0);



  return (
    <div>
      <div>
        <span> Canidate Name:  {canidateName} </span>
        <span> <button onClick={() => setCanidateName("Ramesh")}> Change Name </button> </span>
      </div>

      <div>
        <span> Canidate Age : {candidateAge} </span>
        <span> <button onClick={() => setcandidateAge(28)}> Change age </button> </span>
      </div>

      <div>
        <span> Canidate Score : {score} </span>
        <span> <button onClick={() => setScore( (prevState)=> prevState + 1 )}> Add Score </button> </span>
      </div>
    </div>
  );
}
