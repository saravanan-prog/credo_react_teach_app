import React from "react";
import ReactDOM from "react-dom/client";
import UncontrolledPage from "./pages/useRef-hook/UncontrolledPage";
import UnControlledForm from "./pages/useRef-hook/UncontrolledForm";
import Counter from "./pages/usememo-hook/Counter";
import Calculator from "./pages/useCallback-hook/Calculator";
import DemoPage from "./pages/demo-page/DemoPage.jsx";







const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
     <DemoPage />
  </React.StrictMode>
);
