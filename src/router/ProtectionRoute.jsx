import { auth } from "./auth";
import { Navigate } from "react-router";


export default function ProtectionRoute({children}){

    if(!auth())
        return <Navigate to ="/login" />
    

    return children



}