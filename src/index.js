import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from "./Pages/a_home/Homepage";
import AboutPage from "./Pages/b_about/Aboutpage";
import ContactPage from "./Pages/c_contact/ContactPage";
import BootstrapStart from "./Pages/d_Bootstrap/BootstrapStart";






const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
   <BootstrapStart />
  </React.StrictMode>
);
