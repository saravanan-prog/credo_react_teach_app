import  isAuth  from "./auth"

export default function ProtectionRoute({children}){
    
    if(!isAuth())
        return  
    else 
        return children
}