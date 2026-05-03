import React from "react";
import ReactDOM from "react-dom/client";

import Helloworld from "./Pages/class-component/Helloworld";
import SimpleState from "./Pages/class-component/SimpleState";
import HelloFunction from "./Pages/function-component/HelloFunction";
import HomePage from "./Pages/a_home/HomePage";
import AboutPage from "./Pages/b_about/AboutPage";
import ContactPage from "./Pages/c_contact/ContactPage";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
   
    {/* <HomePage />
    <AboutPage/> */}
    <ContactPage />

  </React.StrictMode>,
);
