// functional Props - callback


import { useState } from "react"
import Buttons from "./Child"

export default function Parent(){

  const count = 0;
  
  const clickme    = () => console.log("button is clicked")
  const clickedBy  = (name) => console.log("clicked By ====>", name)
  const addCount   = (item) => console.log("count===>",count +  item)
  
  return <div> 
        <h1>  Parent Component Functional Props - understanding </h1>


        <Buttons
            clickme   = {clickme}
            clickedBy = {clickedBy}
            addCount  = {addCount}
        />



  </div>
}
