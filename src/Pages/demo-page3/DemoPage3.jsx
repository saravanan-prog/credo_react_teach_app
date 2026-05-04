import { useState } from "react";


export default function DemoPage3() {

  const [fruitsList, setFruitList] = useState(["apple", "orange", "grapes", "pineApple", "lichi"]);
  const [vegetableList, setVegtableList] = useState(["bringal", "potatoo", "cababage", "carrot"]);


  return (
    <div>
      <div className="fruit-list">
        <h3> Fruit List </h3>

        {fruitsList.map((value, index) => (
          <p key={index}> {value} </p>
        ))}

        <button onClick={() => setFruitList([...fruitsList, "greenapple"])}> Add Fruits </button>
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

        <button onClick={() => setVegtableList([...vegetableList, "cali-flower"])}> Add vegetables </button>
      </div>
    </div>
  );
}
