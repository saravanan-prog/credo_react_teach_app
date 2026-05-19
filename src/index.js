import React from "react";
import ReactDOM from "react-dom/client";

import HomePage from './Pages/a_home/HomePage.jsx'
import AboutPage from './Pages/b_about/AboutPage.jsx'




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
   <HomePage />
   <AboutPage />
   

  </React.StrictMode>,
);
