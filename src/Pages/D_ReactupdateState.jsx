import { useState } from "react";

export default function D_ReactupdateState() {

  const [count,setCount] = useState(0)   


  return (
    <>
      <h2> Counter Program </h2>
      <p> Current count is : {count} </p>
      <button onClick = { ()=>setCount(count + 1) }> Add count </button>
      <button onClick = { ()=>setCount(count - 1) }> Decrease count </button>

    </>
  );
}
