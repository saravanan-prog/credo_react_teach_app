import { React, useState } from "react";

export default function F_ReactArrayUpdate() {


  const [fruitsList, setFruitsList] = useState(["apple", "orange", "grapes", "pineapple", "gova"])

  const addFruit = () => {
    setFruitsList([...fruitsList,"lichi"])
  }

  return (
    <>
      <div> 
        <h1> Fruits List </h1> 
      </div>

      <div>
         {fruitsList.map(
           (value,index) => {
              return <div key ={index}>
                  <p> {value} </p>
              </div>
           }
         )}
      </div>
      <div>
        <button onClick = {addFruit}> Add Fruit </button>
      </div>
    </>
  )
}
