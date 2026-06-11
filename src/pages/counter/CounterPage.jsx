import { useSelector,useDispatch } from "react-redux"
import { add,sub } from "./counter.slice"


export default function CounterPage(){

    const count  = useSelector( (state) =>state?.counter?.count )

    const dispatch = useDispatch()

    return <div>
         <h2> Counter Page </h2>

         <div className="counterInformation">
            <h4> Count : {count} </h4>
            <button onClick={() => dispatch(add())}> ADD </button>
             <button onClick={() => dispatch(sub())} > SuB </button>
         </div>
     
    </div>
} 