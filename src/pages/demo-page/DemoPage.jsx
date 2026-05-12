import { useEffect } from "react"
import useFetch from "../../core/custom-hook/useFetch"
import useRandom from "../../core/custom-hook/useRandam"

export default function DemoPage(){

    const otp = useRandom()
    const users = useFetch("https://fakestoreapi.com/users")


    useEffect(()=>{
        console.log("users====>",users)
    },[])

    return <div>
        <p>Otp : {otp} </p>
    </div>
}