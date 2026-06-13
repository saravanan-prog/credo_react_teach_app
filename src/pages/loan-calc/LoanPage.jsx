import { useSelector,useDispatch } from "react-redux"
import { calcIntrest,intrestBy } from "./loanpage.slice"
import { useEffect } from "react"



export default function LoanPage(){

   
     useSelector((state)=> console.log("state===>",state))
   

   const count =  useSelector((state) =>  state.counterReducer.count)
   const principalAmt = useSelector((state) => state.loanpageReducer.principalAmount)
   const IntrestRate = useSelector((state) => state.loanpageReducer.intrestRate)


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