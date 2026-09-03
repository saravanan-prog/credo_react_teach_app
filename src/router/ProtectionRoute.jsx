
import { Navigate } from "react-router-dom";

export default function ProtectionRoute( {children} ){

    const token = localStorage.getItem('token') ? true : false

    if(!token)
        return <Navigate to ="/login" replace/>

    return children;




}