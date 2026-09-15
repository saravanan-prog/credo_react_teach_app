import { useSelector,useDispatch } from "react-redux"
import { add,sub } from "./counter.slice"

export default function CounterMainPage(){

    const count = useSelector((state) => state.counter.count )
    const dispatch = useDispatch()

    return(
        <>
            <div> 
                <h3> Simple Counter App</h3>
            </div>
            <div>
                Current Count is : {count}
            </div>
            <div>
               <button onClick = {()=>dispatch(add())}>ADD</button>
               <button onClick = {()=>dispatch(sub())}>SUB</button>
            </div>
        </>
    )
}