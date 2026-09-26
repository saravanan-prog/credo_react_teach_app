import { useState } from "react";

export default function C_SimpleCondition() {
  
    const [productAvailablestatus,setProductAvailablestatus] = useState(true)

   
      return (
        <>
            <div>
                <h3> Welcome to KPN Store </h3>
            </div>
                {productAvailablestatus &&
                    (
                        <div>
                            <p>Product Name :   Apple </p>
                            <p>Product Price :  80 </p>
                            <button> Buy Now </button>
                        </div>
                    )
                } 
            <div>
                <h4> Thank you for shopping ...</h4>
            </div>         
        </>
      )
   
}
