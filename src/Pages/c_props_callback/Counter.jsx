
import { useState } from "react"
import Buttons from "./Buttons"

export default function Counter(){

  const [count,setCount] = useState(0)

  const clickme = (data) => console.log(data)
  const addCount = (item) => setCount(count + item)
  const subCount = (item) => setCount(count - item)
 
  
  
  return <div>

        <p> Current Value : {count} </p>   
        
        <Buttons 
           clickme = {clickme}
           addCount = {addCount}
           subCount = {subCount}
     
        />



  </div>
}
