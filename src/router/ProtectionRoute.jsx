import { Navigate } from "react-router"

export default function ProtectionRoute({children}){

    const token = localStorage.getItem("token") ? true : false

    if(!token)
        return <Navigate to= {'/login'} />
    else
        return children;
  

}