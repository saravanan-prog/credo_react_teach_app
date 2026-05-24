import { BrowserRouter,Route,Routes } from "react-router-dom"
import HomePage from "../pages/home/HomePage"
import AboutPage from '../pages/about/AboutPage'




export default function MainRoute(){
  
    return <div>
        <BrowserRouter>
          
            <Routes>
                <Route index element = { <HomePage/>} />
                <Route path ="home" element = {<HomePage/>} />
                <Route path ="about" element = {<AboutPage/>} />

                
                <Route path ="*" element = {<h3> 400 Page Not found </h3>} />
            </Routes>
        </BrowserRouter>
    </div>
}