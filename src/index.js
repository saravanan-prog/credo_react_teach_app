import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRoute from "./router/MainRoute";

import { MainContext } from "./core/context/gernalContext";


const appSetting = {

  theme : "light",
  language : "tamil"
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>

    <MainContext.Provider value={ appSetting }>
      <MainRoute />
    </MainContext.Provider>
     
  </React.StrictMode>
);
