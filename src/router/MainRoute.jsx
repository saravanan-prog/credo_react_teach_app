import { BrowserRouter,Route,Routes } from "react-router-dom"
import HomePage from "../Pages/home/Homepage"
import AboutPage from '../Pages/about/Aboutpage'




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