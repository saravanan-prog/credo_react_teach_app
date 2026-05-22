import React,{  useState } from "react";



export default function DemoPage3() {

  const [ fruitsList, setFruitList] = useState( ["apple", "orange", "grapes", "pineApple", "lichi"] );
  
  const handleDelete = ( fruitIndex ) => {

    
    const updatedFruitsList = fruitsList.filter( (value,index) => index !=  fruitIndex )  // 2 -> 2

    setFruitList(updatedFruitsList)

  }

  return (
    <div>
      <div className="fruit-list">
        <h3> Fruit List </h3>

        {fruitsList.map((value, index) => {

          return <React.Fragment  key={index}>
              <div> 
                  <span> {value} </span>
                  <span> <button onClick = {() => handleDelete(index)}> x </button> </span>
               </div>
              
          </React.Fragment>
         
          })}

        <button onClick={() => setFruitList( [...fruitsList,"greenapple"] )}> Add Fruits </button>
        <hr />

      </div>
      
    </div>
  );
}
