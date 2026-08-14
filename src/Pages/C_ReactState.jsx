import { useState } from "react";

export default function C_ReactState() {

  const[product,setProduct] = useState("Apple")
  const [qty,setQty]        = useState(1)
  const [price,setPrice]    = useState(10)

  const addQty = () => {
    let newQty = qty + 1
    setQty(newQty)
    setPrice(10 * newQty)

  }

  const decreaseQty = () => {
    if (qty > 1) {
      const newQty = qty - 1;
      setQty(newQty);
      setPrice(10 * newQty);
    }
  }

  return (
    <>
      <div>
          <p> Your Product : {product} </p>
          <div> 
              <p> Qunantity    </p>
              <button onClick ={decreaseQty}> - </button>
              <span> {qty} </span> 
              <button onClick ={addQty}> + </button>
          </div>
          <p>Product Price : {price} </p>
      </div>
    </>
  );
}