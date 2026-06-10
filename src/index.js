import React from "react";
import ReactDOM from "react-dom/client";
import MainRouter from "./Pages/router/MainRouter";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <h1> Welcome to React Js world </h1>
    <MainRouter />
  </React.StrictMode>
);
