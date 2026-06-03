import { BrowserRouter,Routes,Route, useLocation} from "react-router"
import HomePage from '../Pages/home/Homepage'
import AboutPage from '../Pages/about/Aboutpage'
import BlogPage from '../Pages/blog/BlogPage'
import ContactPage from "../Pages/contact/ContactPage"
import DashboardPage from "../Pages/dashboard/DashboardPage"
import ProductsPage from "../Pages/products/ProductsPage"
import PageNotFound from "../Pages/pagenotFound/PageNotFound"
import Header from "../core/resusble-components/Header"
import ViewFullProduct from "../Pages/products/view-product/ViewFullProduct"

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
                <Route path="dashboard" element= { <DashboardPage /> }   />
                <Route path="products" element= { <ProductsPage /> }   />
                <Route path = "viewproduct" element = {<ViewFullProduct/>} />
                <Route path = "viewproduct/:id" element = {<ViewFullProduct/>} />
                <Route path = "viewproduct/:id/:name" element = {<ViewFullProduct/>} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            
        </BrowserRouter>
    </div>
}