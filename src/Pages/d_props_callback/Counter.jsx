// functional Props - callback


import { useState } from "react"
import Buttons from "./Buttons"

export default function Counter(){

  const [count,setCount] = useState(0)

  const addCount = (item) => setCount(count + item)
  const subCount = (item) => setCount(count - item)
  const reset = (item) => setCount(item)
  const squareRoot = (item) => setCount(count ** item)
 
  
  
  return <div>

        <p> Current Value : {count} </p>   
        
        <Buttons 
           count = {count}
           addCount = {addCount}
           subCount = {subCount}
           squareRoot = {squareRoot}
           reset = {reset}
     
        />



  </div>
}
