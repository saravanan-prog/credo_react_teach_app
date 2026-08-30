import { useState } from "react";

export default function C_UpdateState() {

  const [candidatename, setCandidatename]  = useState("Ramesh")
  const [candidateage,  setCandidateage]    = useState(28)
  const [canidateEmail, setCandidateEmail] = useState("ramesh.rmz@gmail.com")

  const handleUpdate = () => {

      setCandidatename("Nagaraj")
      setCandidateage(32)
      setCandidateEmail("nagaraj123@gmail.com")
  }
  

  return (
    <>
      <div>
        <h3>Episode 1 :: Basic State / Update State - Employee Information </h3>
      </div>
      <div>
          <p> Canidate Name : {candidatename} </p>
          <p> Candidate Age : {candidateage} </p>
          <p> Candidate Email : {canidateEmail} </p>
      </div>
      <div>
          <button onClick = {handleUpdate}> update </button>
      </div>
    </>
  );
}