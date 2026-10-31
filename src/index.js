import React from "react";
import ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min'

import {store} from "./store"
import { Provider } from "react-redux";
import CounterMainPage from "./pages/couter/CounterMainPage";
import ScientificCalculator from "./pages/scientific-calculator/ScientificCalculator";





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Provider store = {store}>
      <CounterMainPage />
      < ScientificCalculator />
    </Provider>
    
  </div>
);
