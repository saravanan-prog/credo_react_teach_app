import { BrowserRouter,Route,Routes } from "react-router-dom"
import HomePage from "../pages/home/Homepage"
import AboutPage from '../pages/about/Aboutpage'
import Dashboard from "../pages/dashboard/Dashboard"
import ProtectionRoute from "./ProtectionRoute"
import Login from "../pages/login/Login"




export default function MainRoute(){

    const loggedIn = false
  
    return <div>
        <BrowserRouter>
          
            <Routes>
                <Route index element = { <HomePage/>} />
                <Route path ="home" element = {<HomePage/>} />
                <Route path ="about" element = {<AboutPage/>} />
                <Route path ="login" element = {<Login/>} />


                <Route path ="dashboard" element = {
                    
                   <ProtectionRoute>
                        <Dashboard />
                   </ProtectionRoute>
                    
                } />  


                <Route path ="*" element = {<h3> 400 Page Not found </h3>} />
            </Routes>
        </BrowserRouter>
    </div>
}