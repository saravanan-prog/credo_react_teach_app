import { useSelector,useDispatch } from "react-redux"
import { addition,subracton,multiplication } from "./counter.slice"
import { Link } from "react-router"


export default function CounterPage(){

   useSelector((state) => console.log("State=========>",state))

   const count    =  useSelector((state) => state?.counterReducer?.count)
   const dispatch = useDispatch()


    return <div>
         <h2> Counter Page </h2>
         
         <p> count : {count}</p>

         <button onClick={()=>dispatch(addition())}> Add </button>
         <button onClick={()=>dispatch(subracton())}> Sub </button>
         <button onClick={()=>dispatch(multiplication())}> Mul </button>
         

         <div>
             <Link to={"/loan"}>Go to loan page </Link>
         </div>
    </div>
} 