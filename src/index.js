import React from "react";
import ReactDOM from "react-dom/client";
import Parentcomponent from "./Pages/b_use-callback/Parentcomponent";
import MainRouter from "./Pages/router/MainRouter";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>
);
