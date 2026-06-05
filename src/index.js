import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRoute from './router/MainRoute'

import { MainContext } from "./core/context/contextStore";



const basicPageSetup = {
  language:"english",
  mode:"light"
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode >
    <MainContext.Provider value={{"basicPageSetup":basicPageSetup}}>
        <MainRoute />
    </MainContext.Provider>
    
  </React.StrictMode>
);
