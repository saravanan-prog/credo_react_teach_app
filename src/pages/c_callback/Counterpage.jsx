import { useState } from "react";
import Buttons from "./Buttons";

export default function Counterpage() {

  const [count, setCount] = useState(0);

  const increment = (item) =>  setCount(count + item )
  const decrement = (item) =>  setCount(count - item )
  const multiply  = (item) =>  setCount(count * item )
  const division  = (item) =>  setCount(count / item )
  const reset     = (item) =>  setCount(item)
 



  return (
    <>
      <div>
        <h3>Counter Calculation</h3>
      </div>
      <div>
        <p> Current count is : {count} </p>
      </div>
      <div>
          <Buttons 
              increment = {increment}
              decrement = {decrement}
              multiply  = {multiply}
              division  = {division}
              reset     = {reset}
          />
      </div>
    </>
  );
}
