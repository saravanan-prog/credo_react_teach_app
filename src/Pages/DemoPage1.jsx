export default function DemoPage1() {
  
  const candidateName = "Saravanan Durai"
  const candidateisAvailable = true 

  return (
    <div>
        <p> Canidate Name : {candidateisAvailable ? candidateName : "Not-Available"} </p>
    </div>
  );
}
