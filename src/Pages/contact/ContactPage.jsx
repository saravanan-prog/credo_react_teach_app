import { useLocation } from "react-router"


export default function ContactPage(){

    const location =  useLocation()
    const urlPrams = new URLSearchParams(location.search)

    console.log("category=======>",urlPrams.get('category'))
    console.log("price=======>",urlPrams.get('price'))


    return <div>
        <div className="container-fluid"> 
            <div className="h3 bg-danger text-white">Contact Page</div>
        </div>
        <div className="container bg-primary text-white m-5">
           
            <p> Please reach out me : saravanan9492@gmai.com</p>
            <p> developed By : <span style={{fontWeight:700}}>Saravanan @ corp limited</span></p>
        </div>
       
         
    </div>
}