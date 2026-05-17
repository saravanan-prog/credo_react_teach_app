import { BrowserRouter,Routes,Route } from "react-router-dom"
import Header from '../core/resusble-components/Header'
import Homepage from '../Pages/home/Homepage'
import Aboutpage from '../Pages/about/Aboutpage'
import Blogpage from '../Pages/blog/BlogPage'
import Contactpage from '../Pages/contact/ContactPage'
import ProductsPage from '../Pages/products/ProductsPage'
import DashboardPage from '../Pages/dashboard/DashboardPage'
import LoginForm from '../Pages/Login/LoginForm'
import ProtectionRoute from "./ProtectionRoute"
import ViewFullProduct from '../Pages/products/view-product/ViewFullProduct'


export default function MainRoute(){


    return <div>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element = { <ProductsPage/>} />
                <Route path ="home" element = {<Homepage/>} />
                <Route path ="about" element = {<Aboutpage/>} />
                <Route path ="blog" element = {<Blogpage/>} />
                <Route path ="contact" element = {<Contactpage/>} />
                <Route path ="products" element = {<ProductsPage/>} />
                <Route path="viewproduct" element = {<ViewFullProduct/>} />
                <Route path="viewproduct/:id" element = {<ViewFullProduct/>} />
                <Route path ="login" element = {<LoginForm/>} />
                <Route path ="dashboard" element = {
                    <ProtectionRoute>
                        <DashboardPage/>
                    </ProtectionRoute>
                    }
                />
                <Route path ="*" element = {<h3> 400 Page Not found </h3>} />
            </Routes>
        </BrowserRouter>
    </div>
}