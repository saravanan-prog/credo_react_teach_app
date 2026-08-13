import { useState } from "react";

export default function D_ReactupdateState() {

  const [count,setCount] = useState(0)

  const increaseCount = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h2> Counter Program </h2>
      <p> Current count is {count} </p>
      <button onClick={increaseCount}> Add count </button>

    </>
  );
}
