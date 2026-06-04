import { BrowserRouter,Routes,Route} from "react-router"
import HomePage from '../Pages/home/Homepage'
import AboutPage from '../Pages/about/Aboutpage'
import BlogPage from '../Pages/blog/BlogPage'
import ContactPage from "../Pages/contact/ContactPage"
import DashboardPage from "../Pages/dashboard/DashboardPage"
import ProductsPage from "../Pages/products/ProductsPage"
import PageNotFound from "../Pages/pagenotFound/PageNotFound"
import Header from "../core/resusble-components/Header"
import ViewFullProduct from "../Pages/products/view-product/ViewFullProduct"
import ButtonHeader from "../core/resusble-components/ButtonHeader"
import LoginForm from "../Pages/Login/LoginForm"
import ProtectionRoute from "./ProtectionRoute"
import DynamicRoutePage from "../Pages/paramter-page/DynamicRoutePage"
import LocationRoutePage from "../Pages/paramter-page/LocationRoutePage"

export default function RoutingOutlet(){

    

    return <div>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element = {<HomePage />} />
                <Route path="home" element= { <HomePage /> } />
                <Route path="about" element= { <AboutPage /> } />
                <Route path="blogs" element= { <BlogPage /> }  />
                <Route path="contact" element= { <ContactPage /> } />  
                <Route path ="login" element = {<LoginForm />} />

                <Route path="dashboard" element= { 
                    <ProtectionRoute>
                         <DashboardPage /> 
                    </ProtectionRoute>
                   

                    }  
                />

                <Route path="products" element= { <ProductsPage /> }   />
                <Route path = "viewproduct" element = {<ViewFullProduct/>} />
                <Route path = "viewproduct/:id" element = {<ViewFullProduct/>} />
                <Route path = "viewproduct/:id/:name" element = {<ViewFullProduct/>} />.



                 <Route path="dynamic" element= { <DynamicRoutePage /> } />
                 <Route path="dynamic/:id" element= { <DynamicRoutePage /> } />
                 <Route path="dynamic/:id/:name" element= { <DynamicRoutePage /> } />

                 <Route path="location" element= { <LocationRoutePage /> } />

                <Route path="*" element={<PageNotFound />} />
            </Routes>
            
        </BrowserRouter>
    </div>
}