import React from "react";
import ReactDOM from "react-dom/client";

import HomePage from './Pages/a_home/HomePage.jsx'
import AboutPage from "./Pages/b_about/AboutPage.jsx";
import ContactPage from "./Pages/c_contact/ContactPage.jsx";











const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
   <ContactPage />

  </React.StrictMode>,
);
