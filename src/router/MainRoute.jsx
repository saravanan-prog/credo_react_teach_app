import { BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "../core/resusble-components/Header"
import Homepage from '../Pages/home/Homepage'
import Aboutpage from '../Pages/about/Aboutpage'
import BlogPage from '../Pages/blog/BlogPage'
import LoginForm from '../Pages/Login/LoginForm'
import DashboardPage from '../Pages/dashboard/DashboardPage'
import ProductsPage from '../Pages/products/ProductsPage'
import ProtectionRoute from "./ProtectionRoute"
import ViewFullProduct from "../Pages/products/view-product/ViewFullProduct"



export default function MainRoute(){


    return <div>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={ <Homepage />} />
                <Route path="home" element = {<Homepage />} />
                <Route path="about" element = {<Aboutpage />} />
                <Route path="blogs" element = {<BlogPage />} />
                <Route path = "login" element = {<LoginForm/>} />



                <Route path = "dashboard" element ={
                    <ProtectionRoute>
                        <DashboardPage />
                    </ProtectionRoute>
                    
                    } />

                <Route path="products" element ={
                    <ProtectionRoute>
                        <ProductsPage />
                    </ProtectionRoute>
                } />

                <Route path="viewproduct/:id" element = {
                    <ProtectionRoute>
                        <ViewFullProduct />
                    </ProtectionRoute>
                } />

                <Route path="viewproduct/:id/:product" element = {
                    <ProtectionRoute>
                        <ViewFullProduct />
                    </ProtectionRoute>
                } />


                <Route path="*" element={ <h3> 404 Page Not Found </h3> } />
            </Routes>
        </BrowserRouter>
    </div>
}