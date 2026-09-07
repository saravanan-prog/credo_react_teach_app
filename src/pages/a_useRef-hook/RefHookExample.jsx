
import { useEffect, useLayoutEffect, useRef } from "react"

export default function RefHookExample(){
    
    const pref = useRef()
    const usernameRef = useRef()

    useLayoutEffect(()=>{
        pref.current.style.backgroundColor = "brown";
        pref.current.style.color = "white";
        usernameRef.current.focus()
    },[])


    return (
        <>
            <div>
                <h3> Use Ref Hook Example </h3>
            </div>

            <div>
                <p ref={pref}> Hello React JS world </p>
            </div>
            <div>
                <input type="text" name="username" ref={usernameRef} />
                <button> Print</button>
            </div>
        
        </>
    )
}