import { BrowserRouter,Routes,Route } from "react-router";
import Headercomponent from "../components/header/Headercomponent";
import Footercomponent from "../components/footer/Footercomponent";
import Homepage from "../Pages/home/Homepage" 
import Aboutpage from "../Pages/about/Aboutpage"
import ContactPage from "../Pages/contact/ContactPage"
import Products from "../Pages/products/Products"
import PageNotFound from "../Pages/pagenotFound/PageNotFound"
import HeaderButtonComponent from "../components/header/HeaderButtonComponent";
import DynamicRoutePage from "../Pages/paramter-page/DynamicRoutePage";
import LocationRoutePage from "../Pages/paramter-page/LocationRoutePage";

export default function MainRoute() {
  return (
    <>
        <BrowserRouter>
          <Headercomponent />
          {/* <HeaderButtonComponent /> */}
          <Routes>
            <Route 
              index
              element = {<Homepage />}
            />
            <Route 
              path = {"home"}
              element = {<Homepage />}
            />
            <Route 
              path = {"about"}
              element = {<Aboutpage />}
            />
            <Route 
              path = {"contact"}
              element = {<ContactPage />}
            />
            <Route 
              path = {"products"}
              element = {<Products />}
            />
            <Route 
              path = {"products/:id"}
              element = {<Products />}
            />
            <Route 
               path="admin"
               element = {<DynamicRoutePage />}
            
            />
            <Route 
               path="admin/:id"
               element = {<DynamicRoutePage />}
            
            />
            <Route 
              path="admin/:id/:name"
              element = {<DynamicRoutePage />}
            
            />
            <Route 
               path="customers"
               element = {<LocationRoutePage />}
             />
            <Route 
              path = {"*"}
              element = {<PageNotFound />}
            />
          </Routes>
          {/* <Footercomponent /> */}
        </BrowserRouter>
    </>
  );
}
