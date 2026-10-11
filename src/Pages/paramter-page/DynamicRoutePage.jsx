import { useEffect } from "react"
import { useParams } from "react-router"


export default function DynamicRoutePage(){

    const {id,name} = useParams()

    useEffect(()=>{
        console.log("useParams=====>",id)
    },[])

    return (
        <div>
            <p> Admin ID  - {id} </p>
            <p> Admin Name - {name}</p>
    
        </div>
    )
}