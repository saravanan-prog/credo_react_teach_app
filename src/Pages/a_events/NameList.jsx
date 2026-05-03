
import { useState } from "react"

export default function NameList(){

    const [input,setInput] = useState()
    const [nameList,setNameList] = useState([])

    return <div>
        <h2> Add Name List </h2>

         <div>
            <input 
                type="text" 
                onChange = { (event) => setInput(event.target.value)} 
            />
            <button onClick={()=>setNameList([...nameList,input]) } > Add </button>
         </div>

         <div>
            <div> <h5> View Name Lists</h5> </div> 
            <div>
                { nameList.map((value,index) => <p key ={index}> {value}</p>)  }
            </div>
                
         </div>
    </div>
}