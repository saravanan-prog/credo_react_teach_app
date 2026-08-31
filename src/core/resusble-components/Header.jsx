import { Link } from "react-router"


export default function Header() {

  


    return (
        <>
            <nav className="d-flex gap-5 justify-content-end">

                <p> <Link to = {"/home"} > Home </Link></p>
                <p> <Link to = {"/about"} > About </Link></p>
                <p> <Link to = {"/blog"}  > Blog </Link></p>
                <p> <Link to = {"/contact"}  > Contact </Link></p>
                <p> <Link to = {"/products"}  > Products </Link></p>

        
            </nav>
        
        
        </>
    )
}