import { useEffect } from "react"

export default function B_Child(){

    useEffect(()=>{

        const intervalId =  setInterval(()=>{
            console.log("welcome to child")
        },1000)

        return(()=>{
            console.log("Unmount phase is calling...",intervalId)
            clearInterval(intervalId)
        })

    },[])


    return <div>
         <p> I am Child page </p>
    </div>
}