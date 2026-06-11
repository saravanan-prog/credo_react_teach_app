import React from "react";
import ReactDOM from "react-dom/client";
import CounterPage from "./pages/counter/CounterPage";

import { Provider } from "react-redux";
import {store} from './store/store'





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>

    <Provider store={store}>
       <CounterPage />  
    </Provider>
    
  </React.StrictMode>
);
