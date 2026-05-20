// functional Props - callback


import { useState } from "react"
import Child from "./Child";

export default function Parent(){

  var count = 0;
  
  const clickme    = () => console.log("button is clicked")
  const clickedBy  = (name) => console.log("clicked By ====>", name)
  const addCount   = (item) => console.log("count===>",count +  item)
  
  return <div> 
        <h1>  Parent Component Functional Props - understanding </h1>


        <Child
            clickme   = {clickme}
            clickedBy = {clickedBy}
            addCount  = {addCount}
        />



  </div>
}
