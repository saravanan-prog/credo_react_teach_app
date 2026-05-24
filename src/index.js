import React from "react";
import ReactDOM from "react-dom/client";
import UncontrolledPage from "./pages/a_useRef-hook/UncontrolledPage.jsx";
import UnControlledForm from "./pages/a_useRef-hook/UncontrolledForm.js";
import Counter from "./pages/b_usememo-hook/Counter.jsx";
import Calculator from "./pages/c_useCallback-hook/Calculator.jsx";
import DemoPage from "./pages/d_demo-page/DemoPage.jsx";







const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
     <DemoPage />
  </React.StrictMode>
);
