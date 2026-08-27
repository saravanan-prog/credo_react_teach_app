import { useState } from "react";
import B_Child from "./ProductList";

export default function Products(){

    const [childShow,setChildShow] = useState(true)

    return <div>
        <p> Products </p>

        <div>
            {childShow && <B_Child /> }

            <button onClick={()=>setChildShow(false)}> disable products </button>
        </div>


    </div>
}