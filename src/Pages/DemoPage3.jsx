export default function DemoPage3() {

  const producletAvailable =  false;
  const product = ["apple","orange","grapes"]


  return (

    <div>
        <p> {producletAvailable ? product : "Currently product is out of stock" }   </p>
    </div>

  );
}