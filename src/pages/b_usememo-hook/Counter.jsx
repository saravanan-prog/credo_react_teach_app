import { useMemo, useState } from "react"



const calcIntrest = (principalAmt) => {
    for(let i=1; i<1000000000; i++){}
    return principalAmt * 3/100
}

export default function Counter(){

    const [count,setCount] = useState(0)
    const [principalAmt,setPrincipalAmt] = useState(25000)

    const intrest = useMemo(()=>{
        return calcIntrest(principalAmt)
    },[principalAmt]) 


   
    return <div>
        <div>
            <p> Count : {count} </p>
            <button onClick={()=>setCount(count + 1)}> Add count </button>
        </div>

        <div>
            <p>Principal Amout : {principalAmt}  </p>
            <span><button onClick ={()=>setPrincipalAmt(principalAmt + 100)}> Increase Principal </button></span>
            <p> Intrest : {intrest} </p>
        </div>

      

    </div>
}

