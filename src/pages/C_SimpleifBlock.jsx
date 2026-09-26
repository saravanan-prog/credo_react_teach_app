import { useState } from "react";

export default function C_SimpleifBlock() {

    const [productAvailable,setProductAvailble] = useState(true)

    return (
        <>
            <div>
                <h3> Welcome to KPN Super Market </h3>
            </div>
            <div>
               {productAvailable && (
                  <div>
                      <p>Product Name  : Apple</p>
                      <p>Product Price : 250</p>
                      <button> Buy now </button>
                  </div>
               )}  
            </div>
            <div>
                <h6>Thank your for Purchasing </h6>
            </div>
        </>
    )
}
