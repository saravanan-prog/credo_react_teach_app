import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./Pages/home/Homepage";
import Aboutpage from "./Pages/about/Aboutpage";
import ContactPage from "./Pages/contact/ContactPage";
import BlogPage from "./Pages/blog/BlogPage";




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
     <BlogPage/>
  </React.StrictMode>
);
