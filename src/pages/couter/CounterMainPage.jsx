import { useSelector,useDispatch } from "react-redux"
import { add } from "./counter.slice"

export default function CounterMainPage(){

  const dispatch = useDispatch()
  useSelector((state)=> console.log("State====>",state))
  
  const count = useSelector((state) =>  state.counter.count )   // Store -> useSelector



    return(
        <>
          <div className="container">
            <div className="h1 text-center">Counter App</div>
            <div className="mt-3">
               <div className="h5"> Count : {count} </div>
            </div>
            <div className="mt-3">
                <button onClick = {()=> dispatch(add())}> ADD </button>
            </div>
          </div>
        </>
    )
}