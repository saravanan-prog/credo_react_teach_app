import { useSelector,useDispatch } from "react-redux"
import { addition,subracton,multiplication } from "./counter.slice"
import { Link } from "react-router"


export default function CounterPage(){

   const applicationTitle  =  useSelector((state) => state?.counterReducer?.appTitle)
   const count             =  useSelector((state) => state?.counterReducer?.count)


   const dispatch = useDispatch()


    return <div>
         <h2> {applicationTitle} </h2>
         
         <p> count : {count}</p>

         <button onClick={ () => dispatch(addition())}> Add </button>
         <button onClick={() =>  dispatch(subracton())}> Sub </button>
         <button onClick={() =>  dispatch(multiplication({"multiplyval":5}))}> Mul </button>
         

         <div>
             <Link to={"/loan"}>Go to loan page </Link>
         </div>
    </div>
} 