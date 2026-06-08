
import { useEffect } from "react"
import { useNavigate } from "react-router";


export default function OrdersPage(){

    const navigate = useNavigate()

    const handleLogout = () => {
        // redirect to login
        localStorage.removeItem("token");
        navigate("/login")

    }

    return <div>
        <h1> Ordders Page </h1>
        <button onClick= {handleLogout}> logout </button>
    </div>
}