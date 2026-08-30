import { useState } from "react";

export default function B_BasicState() {

  const [candidatename,setCandidatename]  = useState("Ramesh")
  const [candidateage,setCandidateage]    = useState(28)
  const [canidateEmail,setCandidateEmail] = useState("ramesh.rmz@gmail.com")
  

  return (
    <>
      <div>
        <h3>Episode 1 :: Basic State - Employee Information </h3>
      </div>
      <div>
          <p> Canidate Name : {candidatename} </p>
          <p> Candidate Age : {candidateage} </p>
          <p> Candidate Email : {canidateEmail} </p>
      </div>
    </>
  );
}
