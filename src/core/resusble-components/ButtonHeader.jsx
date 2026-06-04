
import { useNavigate } from "react-router"

export default function ButtonHeader() {

    const navigate = useNavigate()


    return <div className ="bg-primary">
      
        <button onClick = { () => navigate("/home") }> Home </button>
        <button onClick = { () => navigate("/about") }> About </button>
        <button onClick = { () => navigate("/blogs") }> Blogs </button>
        <button onClick = { () => navigate("/contact") }> Contact </button>

        
    </div>
}