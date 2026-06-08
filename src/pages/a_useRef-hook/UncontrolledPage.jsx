
import { useEffect, useRef, useState } from "react"

export default function UncontrolledPage(){
    
    const pref = useRef()
    const inputRef = useRef()

    useEffect(()=>{
        pref.current.innerHTML = "<h3>Welcome to React JS world </h3>"
        pref.current.style.backgroundColor='brown';
        pref.current.style.color ="white";
        inputRef.current.focus()

    },[])

   
    
   
    return <div>

        <h1> UseRef Hook Example </h1>
        <p ref={pref}> Hello Saravanan </p>
        <input type="text" ref={inputRef} />
  
    </div>
}