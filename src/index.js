import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Store";
import CounterMainPage from "./couter/CounterMainPage";
import ScientificCalculator from "./scientific-calculator/ScientificCalculator";




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
     <Provider store={store}>
        <CounterMainPage />
        <ScientificCalculator />
     </Provider>
  </div>
);
