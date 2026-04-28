export default function DemoPage3() {
  const fruitsList = ["apple", "orange", "grapes", "pineApple", "lichi"];
  const vegetableList = ["bringal", "potatoo", "cababage", "carrot"];

  return (
    <div>
      <div className="fruit-list">
        <h3> Fruit List </h3>
        
        {fruitsList.map((value, index) => (
          <p key={index}> {value} </p>
        ))}

        <hr />
      </div>

      <div className="vegtable-list">
        <h3> Vegtable List </h3>
        <nav>
          <ul>
            {vegetableList.map((value, index) => (
              <li key={index}> {value} </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
