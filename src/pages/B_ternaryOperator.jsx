import { useState } from "react";

export default function B_ternaryOperator() {
  
    const [productAvailablestatus,setProductAvailablestatus] = useState(false)

   
      return (
        <>
            {productAvailablestatus ? 
                (
                    <div>
                        <p>Product Name :   Apple </p>
                        <p>Product Price :  80 </p>
                        <button> Buy Now </button>
                    </div>
                )
            :
                (
                     <div>
                        <h4> Currently Produt is out of stock</h4>
                     </div>
                )
            }
           
        </>
      )
    
  
   
}
