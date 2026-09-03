import { BrowserRouter,Route,Routes } from "react-router-dom"
import HomePage from "../Pages/home/Homepage"
import AboutPage from '../Pages/about/Aboutpage'
import Dashboard from "../Pages/dashboard/Dashboard"
import ProtectionRoute from "./ProtectionRoute"
import Login from "../Pages/login/Login"




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