import { useState } from "react";
import Buttons from "./Buttons";

export default function Counterpage() {

  const [count, setCount] = useState(0);

  const increment = (item) => setCount(count + item )
  const decrement = (item) => count > 0 && setCount(count - item )
  const multiply  = (item) => count > 0 && setCount(count * item )
  const division  = (item) => count > 0 && setCount(count / item )
  const reset     = (item) => setCount(0)
 



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
