import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

import DashboardMain from "./pages/Dashboard/DashboardMain";
import CounterPage from "./pages/counter/CounterPage";




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode >
    <CounterPage />
  </React.StrictMode>
);
