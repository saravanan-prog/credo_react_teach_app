import React from "react";
import ReactDOM from "react-dom/client";
import CounterPage from "./pages/counter/CounterPage";
import { Provider } from "react-redux";
import { store } from "./store";
import LoanPage from "./pages/loan-calc/LoanPage";
import ReviewsPage from "./pages/reviews/ReviewsPage";




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
        {/* <CounterPage />
        <LoanPage /> */}
        <ReviewsPage />
    </Provider>
     
  </React.StrictMode>
);
