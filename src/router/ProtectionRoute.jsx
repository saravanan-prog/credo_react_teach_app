
import { Navigate } from "react-router"
import { auth } from "./auth"


export default function ProtectionRoute({children}){

    if(!auth())
        return <Navigate to="/login" />


    return children

}