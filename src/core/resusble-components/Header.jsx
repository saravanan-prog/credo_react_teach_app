import { Link } from "react-router"


export default function Header() {

  


    return (
        <>
            <div >
      
                <p> <Link to = {"/home"}  > Home </Link></p>
                <p> <Link to = {"/about"} > About </Link></p>
                <p> <Link to = {"/blog"}  > Blog </Link></p>
                <p> <Link to = {"/contact"}  > Contact </Link></p>
        
            </div>
        
        
        </>
    )
}