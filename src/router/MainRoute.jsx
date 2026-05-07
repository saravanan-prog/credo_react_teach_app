import { BrowserRouter,Route,Routes } from "react-router-dom"

import Homepage  from '../Pages/home/Homepage'
import Aboutpage from '../Pages/about/Aboutpage'
import Blogpage from '../Pages/blog/BlogPage'
import Contactpage from '../Pages/contact/ContactPage'
import Header from "../core/resusble-components/Header"


export default function MainRoute(){


    return <div>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element = { <Homepage/>} />
                <Route path ="/home" element = {<Homepage/>} />
                <Route path ="/about" element = {<Aboutpage/>} />
                <Route path ="/blog" element = {<Blogpage/>} />
                <Route path ="/contact" element = {<Contactpage/>} />
                <Route path ="*" element = {<h3> 400 Page Not found </h3>} />
            </Routes>
        </BrowserRouter>
    </div>
}