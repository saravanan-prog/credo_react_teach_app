import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

import CounterPage from "./pages/counter/CounterPage";
import DashboardMain from "./pages/Dashboard/DashboardMain";




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div >
    <DashboardMain />
  </div>
);
