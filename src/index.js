import React from "react";
import ReactDOM from "react-dom/client";
import UserList from "./Pages/customers/UsersList";
import LoginPage from "./Pages/login/LoginPage";




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
     <LoginPage />
  </React.StrictMode>
);
