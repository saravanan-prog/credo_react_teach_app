import { useSelector,useDispatch } from "react-redux"
import { add,sub } from "./counter.slice"


export default function CounterPage(){

    useSelector((state) =>  console.log("state=====>",state) )

    const applicationName  = useSelector((state) =>  state.counterReducer.applicationName )
    const count            = useSelector((state) =>  state.counterReducer.count )
    const dispatch         = useDispatch()

    return <div>
        
        <h2> {applicationName} </h2>
        <div className="counterInformation">
            <p> Count : {count} </p>
            <button onClick = {() => dispatch(add())} > Add </button>
            <button  onClick = {() => dispatch(sub())}> Sub </button>
        </div>
     
    </div>
} 