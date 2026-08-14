import { React, useState } from "react";

export default function F_ReactArrayUpdate() {


  const [fruitsList, setFruitsList] = useState(["apple", "orange", "grapes", "pineapple", "gova"])


  return (
    <>
      <div> <h1> Fruits List </h1> </div>
      <div>
        {
          fruitsList.map((value, index) => {

            return <React.Fragment key={index}>
              <div>
                 <p> {value} </p>
              </div>
            </React.Fragment>

          })
        }
      </div>
      <div>
        <button> Add Fruit </button>
      </div>
    </>
  )
}
