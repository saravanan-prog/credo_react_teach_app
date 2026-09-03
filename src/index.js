import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRoute from './router/MainRoute'

import { MainContext } from "./core/context/contextStore";


function MainPage(){

  const basicPageSetup = {
      language :"tl",
      mode : "dark"
  }



  return(
    <>
      <div>
        <MainContext.Provider value={{"basicSetup":basicPageSetup}}>
           <MainRoute />
        </MainContext.Provider>
      </div>
    </>
  )
}





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div >
    <MainPage />
  </div>
);
