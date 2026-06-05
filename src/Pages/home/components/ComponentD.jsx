import { useContext } from "react"
import { HomeContext } from "../../../core/context/contextStore"


export default function ComponentD(){

    const data = useContext(HomeContext)


    console.log("data=====>",data)


    return <div>
         <p> ComponentD </p>
         <p> studnet name : {data?.studentName}</p>
         
    </div>

}