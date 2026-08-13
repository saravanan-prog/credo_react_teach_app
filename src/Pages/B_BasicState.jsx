export default function B_BasicState() {

  const candidateName = "Mohemed";
  const candidateDepositAmt = 100000.258525888;
  const returnAmount = candidateDepositAmt.toFixed(2) - 6000;
  const mens = 100000;
  const females = 25000;
  const state = "Tamilnaud"

  

  return (

    <div>
      <p> Canidate Name  - {candidateName} </p>
      <p> Candidate Deposit Amount - {candidateDepositAmt.toFixed(2)} </p>
      <p> Return Amount : {returnAmount} </p>
      <p> Election Commission State : {state} </p>
      <p> People population : {mens + females}</p>
    </div>

  );
}
