export default function DemoPage2() {
  const candidateName = "Saravanan Durai";
  const candidateDepositAmt = 100000.258525888;
  const returnAmount = candidateDepositAmt - 6000;
  const mens = 100000;
  const females = 25000;

  return (
    <div>
      <p> Election Naminated Candidate - {candidateName.toUpperCase()} </p>
      <p> Depost Election Amount - {candidateDepositAmt.toFixed(2)} </p>
      <p> After Election get Return Amount : {returnAmount.toFixed(2)} </p>
      <p> Election Commission name : {"Tamilnadu"} </p>
      <p> People population : {mens + females}</p>
    </div>
  );
}
