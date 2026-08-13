import { useState } from "react";

export default function B_BasicState() {

  const [candidateName,setCandidatename] = useState("Saravanan")
  const [depositAmout,setDepositamount]  = useState(25000)
  const [returnAmount,setReturnAmount]   = useState(depositAmout - 6000)
  

  return (

    <div>
      <p> Canidate Name  - {candidateName} </p>
      <p> Candidate Deposit Amount - {depositAmout} </p>
      <p> Return Amount : {returnAmount} </p>
    </div>

  );
}