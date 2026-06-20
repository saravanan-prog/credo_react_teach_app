import { BrowserRouter,Routes,Route } from "react-router";
import ProductPage from "../pages/products/ProductsPage";
import Dashboard from "../pages/Dashboard/Dashboard";

export default function MainRouter(){


    return <div>
        <BrowserRouter>
           <Routes>
              <Route index element = {<ProductPage />} />
              <Route path="products" element = {<ProductPage />} />
              <Route path="dashboard" element = {<Dashboard />} />
                <Route path="*" element = {<h1>404 Not Found </h1>} />


           </Routes>
        </BrowserRouter>
    </div>
}
