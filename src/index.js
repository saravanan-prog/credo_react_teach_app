import React from "react";
import ReactDOM from "react-dom/client";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Homepage from "./Pages/a_normal-css/Homepage";
import AboutPage from "./Pages/b_module-css/Aboutpage";
import ContactPage from "./Pages/c_inline-css/ContactPage";
import BootstrapStart from "./Pages/d_Bootstrap/BootstrapStart";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BootstrapStart />
  </React.StrictMode>
);
