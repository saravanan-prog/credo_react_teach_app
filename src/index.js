import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/home/HomePage";
import MainRoute from './router/MainRoute'

import { BasicPagesettingcontext } from './core/context/genralContext'


const basicPageSetup = {
  language : "tamil",
  themeMode : "dark"
}




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode >
    <BasicPagesettingcontext.Provider value ={ {"basicPageSetup" : basicPageSetup} }>
        <MainRoute />
    </BasicPagesettingcontext.Provider>
    
  </React.StrictMode>
);
