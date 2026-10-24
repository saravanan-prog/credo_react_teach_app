import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"

import LoginPage from "./Pages/Axios-Method/login/LoginPage";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
     <LoginPage />
  </React.StrictMode>
);
