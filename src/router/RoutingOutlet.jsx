import { BrowserRouter,Routes,Route} from "react-router"
import HomePage from '../Pages/home/Homepage'
import AboutPage from '../Pages/about/Aboutpage'
import BlogPage from '../Pages/blog/BlogPage'
import ContactPage from "../Pages/contact/ContactPage"
import DashboardPage from "../Pages/dashboard/DashboardPage"
import PageNotFound from "../Pages/pagenotFound/PageNotFound"
import Header from "../core/resusble-components/Header"
import LoginForm from "../Pages/Login/LoginForm"

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
                <Route path ="dashboard" element = {<DashboardPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            
        </BrowserRouter>
    </div>
}