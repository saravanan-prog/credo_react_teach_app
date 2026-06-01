import { useState } from "react";
import B_Child from "./B_Child";

export default function A_parent(){

    const [childShow,setChildShow] = useState(true)

    return <div>
        <p> I am Parent page </p>


        <div>
            {childShow && <B_Child /> }

            <button onClick={()=>setChildShow(false)}> Hide the component </button>
        </div>


    </div>
}