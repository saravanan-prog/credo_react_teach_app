import { useState } from "react";

export default function Buttons(
   { 
      increment,
      decrement,
      multiply,
      division,
      reset
    }
) {
 

  return (
    <>
      <div>
          <button  onClick = { () => increment(1) } > Increment + 1 </button>
          <button  onClick = { () => decrement(1) } > Decrement - 1 </button>
          <button  onClick = { () => multiply(5) }>  Multipli * 5 </button>
          <button  onClick = { () => division(2)}  >   Divide By 2 </button>
          <button  onClick = { () =>  reset(0)}  >   Reset </button>
          
      </div>
    </>
  );
}
