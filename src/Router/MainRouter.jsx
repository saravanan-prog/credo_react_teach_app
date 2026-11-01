import { BrowserRouter,Routes,Route } from "react-router";

import Products from "../pages/products/Product";
import Dashboard from '../pages/Dashboard/Dashboard'

export default function MainRouter(){


    return <div>
        <BrowserRouter>
           <Routes>
              <Route index element = {<Products />} />
              <Route path="products" element = {<Products />} />
              <Route path="dashboard" element = {<Dashboard />} />
                <Route path="*" element = {<h1>404 Not Found </h1>} />


           </Routes>
        </BrowserRouter>
    </div>
}
