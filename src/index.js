import React from "react";
import ReactDOM from "react-dom/client";
import CounterPage from "./pages/counter/CounterPage";
import { Provider } from "react-redux";
import { store } from "./store";
import LoanPage from "./pages/loan-calc/LoanPage";
import ProductPage from "./pages/products/ProductsPage";




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <ProductPage />
    
    </Provider>
     
  </React.StrictMode>
);
