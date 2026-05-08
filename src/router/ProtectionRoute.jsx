
import { Navigate } from "react-router-dom";
import isAuth from "./auth";

export default function ProtectionRoute( {children} ){


    if(!isAuth())
        return <Navigate to ="/login" replace/>

    return children;




}