import React from "react";
import ReactDOM from "react-dom/client";
import A_parent from "./pages/a_props-basic-understand/A_parent";
import School from "./pages/b_props_drilling/School";
import Parent from "./pages/c_props_callback/Parent";











const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>,
);
