import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
// import UserList from "./Pages/customers/UsersList";
// import LoginPage from "./Pages/login/LoginPage";
// import DashboardPage from "./Pages/dashboard/DashboardPage";

const UserList = lazy( ()=> import("./Pages/customers/UsersList"))





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Suspense fallback = {<h1> Loading... saravanan </h1>}>
         <UserList />
    </Suspense>
    
  </React.StrictMode>
);
