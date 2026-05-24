import { Link } from "react-router"


export default function Header() {


    return <div className ="bg-primary">

        <p> <Link to = {"/home"} className="text-white"> Home </Link></p>
        <p> <Link to = {"/about"}  className="text-white"> About </Link></p>
        <p> <Link to = {"/blogs"}  className="text-white"> Blog </Link></p>
    </div>
}