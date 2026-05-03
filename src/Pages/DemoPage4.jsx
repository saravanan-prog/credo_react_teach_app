export default function DemoPage4() {

  const fruitsList = ["apple", "orange", "grapes", "pineApple", "lichi"];
  const fruitStatus = true;

  return (
    <div>
        {
          fruitStatus ?
            fruitsList.map((value,index) => <p key={index}> {value} </p> )
          : 
            "Fruits is out of stock"
        }
    </div>
  );
}
