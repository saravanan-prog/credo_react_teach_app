import React from "react";
import ReactDOM from "react-dom/client";
import UncontrolledPage from "./pages/a_useRef-hook/UncontrolledPage";
import UnControlledForm from "./pages/a_useRef-hook/UncontrolledForm";
import Counter from "./pages/b_usememo-hook/Counter";
import Calculator from "./pages/c_useCallback-hook/Calculator";
import DemoPage from './pages/d_demo-page/DemoPage'








const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
     <UnControlledForm />
  </React.StrictMode>
);
