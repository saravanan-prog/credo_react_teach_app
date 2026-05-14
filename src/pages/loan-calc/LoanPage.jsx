import { useSelector,useDispatch } from "react-redux"
import { calcIntrest,intrestBy } from "./loanpage.slice"



export default function LoanPage(){

   const count =  useSelector((state) =>  state.counter.count)
   const principalAmt = useSelector((state) => state.loanData.principalAmount)
   const IntrestRate = useSelector((state) => state.loanData.intrestRate)


   const dispatch = useDispatch()


    return <div>
         <h2> LoanPage Page </h2>
         <p> Pevious counter : {count}</p>
         <p> Principal Amt - {principalAmt}</p>
         <p> Inrest Rate  - {IntrestRate}</p>
         <button onClick={()=>dispatch(calcIntrest())}> Calc intrest </button>
         <button onClick={()=>dispatch(intrestBy({"percentage":9}))} > cal by 9 percentage </button>
         
    </div>
} 