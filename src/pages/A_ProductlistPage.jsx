import { useState } from "react";
import products from './assets/json/product.json'

export default function A_ProductlistPage() {
  
    const [proudcutList,setProductList] = useState(products)

  
    return (
      <>
      <div>
        <h3> Welcome to KPN Store </h3>
      </div>
       {proudcutList && proudcutList.length !=0 ? (
          proudcutList.map((value,key)=>{
            return (
              <div>
                 <p>Prdouct Name : {value?.product_name} </p>
                 <p>Prdouct Name : {value?.product_price} </p>
                 <hr />
              </div>
            )
          })
        )
        :(
          <div>
             <h5> Currently product is out of stock we will soon</h5>
          </div>
        )
       }
      </>
    )
}
