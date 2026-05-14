import { useSelector,useDispatch } from "react-redux"
import { addition,subracton,multiplication } from "./counter.slice"


export default function CounterPage(){

   const count =  useSelector((state) => state?.counter?.count)
   const dispatch = useDispatch()


    return <div>
         <h2> Counter Page </h2>
         
         <p> count : {count}</p>

         <button onClick={()=>dispatch(addition())}> Add </button>
         <button onClick={()=>dispatch(subracton())}> Sub </button>
         <button onClick={()=>dispatch(multiplication())}> Mul </button>
    </div>
} 