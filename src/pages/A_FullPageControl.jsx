import { useState } from "react";

export default function A_FullPageControl() {

  const [loggedIn , setloggedIn] = useState(false);
  
  const formSubmit = (e) =>{
    e.preventDefault()
    setloggedIn(true)
  }


  if(loggedIn){
    return (
      <>
        <div> Welcome Back Saravanan !!</div>
        <button onClick = {()=>setloggedIn(false)}> logout</button>
      </>
    )
  }
  else{
    return (
      <>
         <div>
            <form onSubmit={formSubmit}>
                <div>
                    <label>Username </label>
                    <input type="text" name="username" />
                </div>
                 <div>
                    <label>Password </label>
                    <input type="password" name="password" />
                </div>
                <div>
                   <input type="submit" />
                </div>
            </form>
         </div>
      </>
    )
  }
}
