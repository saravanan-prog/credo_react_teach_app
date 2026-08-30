import { useState } from "react";

export default function D_ReactCounterProgram() {

  const [count, setCount] = useState(0)   
  

  return (
    <>
      <div>
          <h2> Counter Program </h2>
      </div>
      <div>
          <p> Current count is : {count} </p>
          <button onClick = { () => setCount(count + 1) }> Add count </button>
          <button onClick = { () => setCount(count - 1) }> Decrease count </button>
      </div>
     
      
     

    </>
  );
}
