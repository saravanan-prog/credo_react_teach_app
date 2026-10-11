import { BrowserRouter, Routes, Route } from "react-router";

import DashboardPage from "../Pages/dashboard/DashboardPage";

import PageNotFound from "../Pages/pagenotFound/PageNotFound";
import Header from "../core/resusble-components/Header";
import LoginForm from "../Pages/Login/LoginForm";
import ProtectionRoute from "./ProtectionRoute";
import OrdersPage from "../Pages/orders/OrdersPage";
import HomePage from "../Pages/home/HomePage";

export default function MainRoute() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route 
            index 
            element={<LoginForm />} 
          />
          <Route 
            path="home" 
            element={<HomePage />} 
          />

          <Route 
            path="login" 
            element={<LoginForm />} 
          />

          <Route
            path="dashboard"
            element={
              <ProtectionRoute>
                <DashboardPage />
              </ProtectionRoute>
            }
          />

          <Route
            path="orders"
            element={
              <ProtectionRoute>
                <OrdersPage />
              </ProtectionRoute>
            }
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
