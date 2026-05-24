
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export default function DashboardPage(){

    const navigate = useNavigate()

    const handleLogout = () => {
        // redirect to login
        localStorage.removeItem("token");
        navigate("/login")

    }




    return <div>
        <h1> Dashboard Page </h1>
        <button onClick= {handleLogout}> logout </button>
    </div>
}