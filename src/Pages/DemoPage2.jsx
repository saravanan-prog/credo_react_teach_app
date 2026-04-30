import { useState } from "react";

export default function DemoPage2() {

  
  const [candidateName,setcandidateName] = useState("Saravanan Durai");
  const [candidateDepositAmt,setcandidateDepositAmt] = useState(100000.258525888);
  const [returnAmount,setReturnAmount] = useState(candidateDepositAmt - 6000);
  const [mensCount,setMenscount] = useState(100000);
  const [femalesCount,setFemalescount] = useState(25000);

  const handleUpdate = () =>{
    setcandidateName("Sarath kumar")
    // setcandidateDepositAmt((prevState) => prevState + 20000)
    // setReturnAmount((prevState) =>  prevState - 7000)

    setcandidateDepositAmt(candidateDepositAmt + 20000)
    setReturnAmount(returnAmount - 7000)
  
    setMenscount(50000)
    setFemalescount(50000)
  }

  return (
    <div>
      <p> Election Naminated Candidate - {candidateName.toUpperCase()} </p> 
      <p> Depost Election Amount - {candidateDepositAmt.toFixed(2)} </p>
      <p> After Election get Return Amount : {returnAmount.toFixed(2)} </p>
      <p> Election Commission name : {"Tamilnadu"} </p>
      <p> People population : {mensCount + femalesCount}</p>

      <div>
         <button onClick = {handleUpdate}>update Information</button>
      </div>


    </div>
  );
}
