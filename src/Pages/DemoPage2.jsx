export default function DemoPage2() {

  const candidateName = "Saravanan Durai";
  const candidateDepositAmt = 100000.258525888;
  const returnAmount = candidateDepositAmt - 6000;
  const mens = 100000;
  const females = 25000;
  const state = "Tamilnaud"

  return (

    <div>
      <p> Election Nominated Candidate - {candidateName.toUpperCase()} </p>
      <p> Depost Election Amount - {candidateDepositAmt.toFixed(2)} </p>
      <p> After Election get Return Amount : {returnAmount} </p>
      <p> Election Commission name : {state} </p>
      <p> People population : {mens + females}</p>
    </div>

  );
}
