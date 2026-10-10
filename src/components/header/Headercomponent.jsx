import { Link } from "react-router"

export default function Headercomponent(){


    return(
        <>
            <div class="m-3 nav-nav d-flex justify-content-around">
                <Link to={"/home"} className="nav-link"> Home </Link>
                <Link to={"/about"} className="nav-link"> About </Link>
                <Link to={"/contact"} className="nav-link"> Contact </Link>
                <Link to={"/products"} className="nav-link"> Products </Link>
            </div>
          
        </>
    )
}