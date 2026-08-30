import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import E_UnmountPhase from "./pages/E_UnmountPhase";


function MainPage(){
  const [showpage,setShowpage] = useState(true)
  return (
    <>
      { showpage && <E_UnmountPhase /> }

      <button onClick={()=>setShowpage(false) }> Hide Page</button>
     
    </>
  )
}




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
  
    <MainPage/>

  </div>
);
