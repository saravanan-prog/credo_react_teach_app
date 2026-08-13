import { React, useState } from "react";

export default function F_ReactArrayUpdate() {


  const [fruitsList, setFruitsList] = useState(["apple", "orange", "grapes", "pineapple", "gova"])


  return (
    <>
      <div> <h1> Fruits List </h1> </div>
      <div>
        {
          fruitsList.map((value, key) => {

            return <React.Fragment key={key}>
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
