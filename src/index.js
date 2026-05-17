import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from "./Pages/home/Homepage";
import AboutPage from "./Pages/about/AboutPage";
import Contact from "./Pages/contact-react-bs-page/Contact";





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
   <Contact />
  </React.StrictMode>
);
