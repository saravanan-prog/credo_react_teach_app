import { useState } from "react";

export default function B_TernaryOperator() {

    const [productAvailable,setProductAvailble] = useState(false)

    return (
        <>
            <div>
                <h3> Welcome to KPN Super Market </h3>
            </div>
            <div>
               {productAvailable ?
                  <div>
                      <p>Product Name  : Apple</p>
                      <p>Product Price : 250</p>
                      <button> Buy now </button>
                  </div>
                  
                :
                  <div>
                      <h3> Product is out of stock</h3>
                  </div>
                }
            </div>

            <div>
                <h6>Thank your for Purchasing </h6>
            </div>
        </>
    )
}
