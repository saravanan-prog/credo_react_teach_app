import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import D_UnmountPhase from "./pages/D_UnmountPhase";


function MainPage(){

  const [disable,setDisable] = useState(false)


  return (
    <>
       {!disable &&  <D_UnmountPhase /> }
       <button onClick ={()=>setDisable(true)} > Disable </button>
    
    </>
  )
}







const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  
    <MainPage />

  // </React.StrictMode>,
);
