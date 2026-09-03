import { useMemo, useState } from "react"



const calcTax = (price) => {
    
    return price * 3/100
}

export default function Counter(){

    const [price,setPrice] = useState(0)

    const productTax = calcTax(price)
    


   
    return <div>
        <div>
            <p> product price : {price} </p>
            <button onClick={()=>setPrice(price + 1)}> increase amount </button>
        </div>

        <div>
            <p>Tax Amout : {productTax}  </p>
        </div>

    </div>
}

