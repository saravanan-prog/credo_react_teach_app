import { useState } from "react";

export default function A_fullcontrolStatment() {
  
    const [loggedIn,setLoggedIn] = useState(true)

    if(loggedIn){
      return (
        <>
          <div>
            <h3> Welcome back Saravanan </h3>
            <button onClick = {()=>setLoggedIn(false)} >log out </button>
          </div>   
        </>
      )
    }
    else{
      return (
        <>
            <div>
              <h2> Please Login !!! </h2>
              <button onClick = {()=>setLoggedIn(true)} > Login </button>
            </div>
        </>
      )
    }
  
   
}
