import { useState } from "react";

export default function DemoPage2() {

  
  const [candidateName,setcandidateName] = useState("Saravanan Durai");
  const [candidateDepositAmt,setcandidateDepositAmt] = useState(100000.258525888);
  const [returnAmount,setReturnAmount] = useState(candidateDepositAmt - 6000);
  const [mensCount,setMenscount] = useState(100000);
  const [femalesCount,setFemalescount] = useState(25000);
  const [bulkbtndisable,setbulkbtndisable] = useState(false)

  const handleUpdate = () =>{
    setcandidateName("Sarath kumar")
    setcandidateDepositAmt(candidateDepositAmt + 20000)
    setReturnAmount(candidateDepositAmt - 7000)
    setMenscount(50000)
    setFemalescount(50000)
    setbulkbtndisable(true)
  }

  return (
    <div>
      <p> Election Commission name : {"Tamilnadu"} </p>
      <p> Election Naminated Candidate - {candidateName.toUpperCase()} </p>  
      <p> Deposit Election Amount - {candidateDepositAmt.toFixed(2)} </p>
      <p> After Election get Return Amount : {returnAmount.toFixed(2)} </p>
      <p> People population : {mensCount + femalesCount}</p>

      <div>
         <button 
           onClick = {handleUpdate}
           disabled = {bulkbtndisable}
         > Bulk Update </button>
      </div>


    </div>
  );
}
